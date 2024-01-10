import { render, screen } from "@testing-library/react"
import GifItem from "../../src/components/GifItem";

describe('test en el componente GifItem', () => {
    const title = "Dragon Ball GIF by Toei Animation";

    const url = "https://media0.giphy.com/media/977YesTjNfQC7vQiph/giphy.gif?cid=45cd77b399b6fbgqelngvlrxgktjoekznt99efr9wyjacrb6&ep=v1_gifs_search&rid=giphy.gif&ct=g";

    test('el snapshot debe coincidir', () => {
        const {container} = render(<GifItem title={title} url={url}/>); 
        expect(container).toMatchSnapshot();
    });
    test('debe mostrar la imagen con el url y el alt indicado', () => {
        render(<GifItem title={title} url={url}/>);
        const {src, alt} = screen.getByRole("img");
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
    test('debe mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    });
});