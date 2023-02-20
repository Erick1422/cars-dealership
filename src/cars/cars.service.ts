import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corsa'
        },
        {
            id: 2,
            brand: 'Audi',
            model: 'R8'
        },
        {
            id: 3,
            brand: 'Renault',
            model: '12'
        }
    ];

    findAll() {
        return this.cars;
    }

    findById(id: number) {
        let carFund = this.cars.find(car => car.id === id);
        if (!carFund) {
            throw new NotFoundException(`Car with id ${id} not found`);
        }
        return carFund;
    }
}
