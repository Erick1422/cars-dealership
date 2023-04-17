import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corsa'
        },
        {
            id: uuid(),
            brand: 'Audi',
            model: 'R8'
        },
        {
            id: uuid(),
            brand: 'Renault',
            model: '12'
        }
    ];

    findAll() {
        return this.cars;
    }

    findById(id: string) {
        let carFund = this.cars.find(car => car.id === id);
        if (!carFund) {
            throw new NotFoundException(`Car with id ${id} not found`);
        }
        return carFund;
    }

    create(createCarDto: CreateCarDto) {
        const newCar: Car = { id: uuid(), ...createCarDto };
        this.cars.push(newCar);

        return newCar;
    }

    update (id: string, updateCarDto: UpdateCarDto) {
        let carDB = this.findById(id);

        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id
                }
                return carDB;
            }
            return car;
        });
        return carDB;
    }

    delete (id: string) {
        // Código del vídeo
        /* const car = this.findById(id);
        this.cars = this.cars.filter(car => car.id !== id); */
        let carIndex = this.cars.findIndex((car) => car.id === id);
        if (carIndex === -1) {
            throw new NotFoundException(`Car with id ${id} not found`)
        }
        this.cars.splice(carIndex, 1);
        return {
            "statusCode": 200,
            "message": "Car deleted"
        };
    }
}
