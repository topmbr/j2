QUnit.test("Test add function", function(assert) {
    const calc = new Calculator();
    assert.equal(calc.add(5, 3), 8, "5 + 3 should be 8");
});

QUnit.test("Test subtract function", function(assert) {
    const calc = new Calculator();
    assert.equal(calc.subtract(10, 6), 4, "10 - 6 should be 4");
});

QUnit.test("Test multiply function", function(assert) {
    const calc = new Calculator();
    assert.equal(calc.multiply(4, 7), 28, "4 * 7 should be 28");
});

QUnit.test("Test divide function", function(assert) {
    const calc = new Calculator();
    assert.equal(calc.divide(20, 5), 4, "20 / 5 should be 4");
});

QUnit.test("Test divide by zero", function(assert) {
    const calc = new Calculator();
    assert.equal(calc.divide(20, 0), "Ошибка: Деление на ноль!", "Dividing by zero should return an error message");
});
