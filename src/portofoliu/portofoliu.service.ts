import { Injectable } from '@nestjs/common';
import { Portofoliu } from './entities/portofoliu.entity';
import { join } from 'path';
import { readFileSync, writeFileSync } from 'fs';

@Injectable()
export class PortofoliuService {
  private lucrari: Portofoliu[] = [];
  private idCounter = 1;
  private filePath = join(__dirname, 'portofoliu.json');

  constructor() {
    this.loadFromFile();
  }

  //Citeste datele din portofoliu.json
  private loadFromFile(): void {
    try {
      const data = readFileSync(this.filePath, 'utf-8');
      this.lucrari = JSON.parse(data);
      this.idCounter = this.lucrari.length
        ? Math.max(...this.lucrari.map((p) => p.id)) + 1
        : null;
    } catch (error) {
      console.error(
        'Could not read the portfolio file, starting with an empty array.',
        error,
      );
      this.lucrari = [];
    }
  }

  //Adauga datele in portofoliu.json
  private saveToFile(): void {
    writeFileSync(this.filePath, JSON.stringify(this.lucrari, null, 2));
  }

  create(portofoliu: Omit<Portofoliu, 'id'>): Portofoliu {
    const newPortofoliu = new Portofoliu(
      this.idCounter++,
      portofoliu.titlu,
      portofoliu.descriere,
      portofoliu.imagine,
      portofoliu.linkClient,
      portofoliu.status,
    );

    this.lucrari.push(newPortofoliu);
    this.lucrari.push(newPortofoliu);
    this.saveToFile();
    return newPortofoliu;
  }

  findAll() {
    return this.lucrari;
  }

  findOne(id: number) {
    return `This action returns a #${id} portofoliu`;
  }

  update(
    id: number,
    updatedPortofoliu: Partial<Portofoliu>,
  ): Portofoliu | undefined {
    const portofoliu = this.findOne(id);
    if (portofoliu) {
      Object.assign(portofoliu, updatedPortofoliu);
      this.saveToFile;
    }
    return portofoliu;
  }

  remove(id: number) {
    return `This action removes a #${id} portofoliu`;
  }
}
