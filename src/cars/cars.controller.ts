import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

// Escucha las solicitudes, ergo, emite una respuesta
@Controller('cars')
// @UsePipes(ValidationPipe) // También se puede usar a nivel de controlador
export class CarsController {

    // Al realizar la injección, nest automáticamente instancia la clase
    constructor(
        private readonly carsService: CarsService
    ) { }

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
        console.log({ id });
        return this.carsService.findById(id);
    }

    @Post()
    // @UsePipes(ValidationPipe)
    createCar(@Body() createCarDto: CreateCarDto) {
        return this.carsService.create(createCarDto);
    }

    @Patch(':id')
    updateCar(
        @Body() updateCarDto: UpdateCarDto,
        @Param('id', ParseUUIDPipe) id: string
    ) {
        return this.carsService.update(id, updateCarDto);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.delete(id);
    }
}