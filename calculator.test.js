// AAA Patern
// 1A Arrange: Preparemos las pruebas
// 2A ACT: Actuar ... llamar los metodos
// 3A ASSERT: Validar que el resultado sea el esperado

const cal = require('./calculator'); //Arrange

describe('Add Operator', () => {
    test('adds 1 + 1 to equals 2', () => {
        var value = cal.add(1,1); //ACT
        expect(value).toBe(2); //ASSERT
    });
    
    test('adds 5 + 2 to equals 7', () => {
        var value = cal.add(5,2);//ACT
        expect(value).toBe(7);//ASSERT
    }); 
});


describe('Subtract Operator', () => {
    test('Subtracts 2 - 1 to equals 1', () => {
        var value = cal.subtract(2,1);//ACT
        expect(value).toBe(1);//ASSERT
    });
    
    test('Subtracts 3 - 1 to equals 2', () => {
        var value = cal.subtract(3,1);//ACT
        expect(value).toBe(2);//ASSERT
    }); 
});