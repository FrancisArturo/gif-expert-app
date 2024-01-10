import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory";

describe('pruebas en AddCategory', () => {

    test('debe cambiar el value de el input de texto', () => {
        render(<AddCategory onAddCategory={() => {}}/>);
        const input = screen.getByRole("textbox");
        fireEvent.input(input,  {target: {value: "saitama"}});
        expect(input.value).toBe("saitama");
    });
    test('debe llamar onAddCategory si el input tiene un value', () => {
        const inputValue = "saitama";
        const onAddCategory = jest.fn();

        render(<AddCategory onAddCategory={onAddCategory}/>);

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input,  {target: {value: inputValue}});
        fireEvent.submit(form); 

        expect(input.value).toBe("");

        expect(onAddCategory).toHaveBeenCalled();
        expect(onAddCategory).toHaveBeenCalledTimes(1);
        expect(onAddCategory).toHaveBeenCalledWith(inputValue);
    });
    test('no debe llamar el onAddCategory si no hay input value', () => {
        const onAddCategory = jest.fn();

        render(<AddCategory onAddCategory={onAddCategory}/>);

        const form = screen.getByRole("form");

        fireEvent.submit(form); 

        expect(onAddCategory).toHaveBeenCalledTimes(0);
    });
});