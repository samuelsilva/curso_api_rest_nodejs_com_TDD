describe("Initial tests", () => {
  test("Devo conhecer as assertivas do jest",() => {
    let number = null;
    expect(number).toBeNull();
    number = 10;
    expect(number).not.toBeNull();
    expect(number).toBe(10); // pra primitivos toBe e toEqual são iguais
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
  });

  test("Não nulo",() => {
    let number = 10;
    expect(number).not.toBeNull();
  });

  test("Éh 10",() => {
    let number = 10;
    expect(number).toBe(10);
  });

  test("Igual a 10",() => {
    let number = 10;
    expect(number).toEqual(10);
  });
  
});


describe("Devo saber trabalhar com objetos",() => {
  test("Tem a propriedade nome",() => {
    const obj = { name: 'John', mail: 'john@mail.com'};
    expect(obj).toHaveProperty('name');
  });
  test("Tem a propriedade mail",() => {
    const obj = { name: 'John', mail: 'john@mail.com'};
    expect(obj).toHaveProperty('mail');
  });
  test("Tem as propriedades nome E mail",() => {
    const obj = { name: 'John', mail: 'john@mail.com'};
    expect(obj).toHaveProperty('name');
    expect(obj).toHaveProperty('mail');
  });
  test("A propriedades nome é John",() => {
    const obj = { name: 'John', mail: 'john@mail.com'};
    expect(obj).toHaveProperty('name','John');
    expect(obj.name).toBe('John');

    const obj2 = { name: 'John', mail: 'john@mail.com'};
    //expect(obj).toBe(obj2); // os valores são iguais, mas são objetos diferentes
    expect(obj).toEqual(obj2); // os valores são iguais, mas são objetos diferentes

  });

});