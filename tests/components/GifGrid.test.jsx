import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import useFetchGifs from "../../src/hooks/useFetchGifs";


jest.mock("../../src/hooks/useFetchGifs");

describe('pruebas en Gif Grid', () => {
    
    const category = "overwatch";

    test('debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        });

        render(<GifGrid  category={category}/>);
        expect(screen.getByText("Cargando..."));
        expect(screen.getByText(category));

    });
    test('debe mostrar items cuando se cargan las imagenes del fetchGifs', () => {

        const gifs = [
            {
                id: "Abc",
                title: "Saitama",
                url: "https://localhost/imageS.jpg"
            },

            {
                id: "cde",
                title: "goku",
                url: "https://localhost/imageG.jpg"
            }
        ]

        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading: false
        });
        
        render(<GifGrid  category={category}/>);
        
        expect(screen.getAllByRole("img").length).toBe(2)
    });
});