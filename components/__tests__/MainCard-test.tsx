import { render } from '@testing-library/react-native';
import MainCard from '../cards/MainCard';

jest.mock('@expo/vector-icons', () => ({
    MaterialCommunityIcons: () => null,
}));

//rodar testes com yarn run test

describe('testar Main Card', () => {

    const props = {
        title: "Batalha Épica",
        participating: 5,
        imgUrl: "https://static.vecteezy.com/system/resources/thumbnails/050/597/886/small/red-dragon-head-illustration-png.png",
        name: "Dragão Vermelho",
        hp: -2,
        damageDone: 800
    };

    test('renderiza o título', () => {
        const { getByTestId } = render(<MainCard {...props} />);
        expect(getByTestId('maincard-title').props.children).toBe(props.title);
    });

    test('renderiza o nome', () => {
        const { getByTestId } = render(<MainCard {...props} />);
        expect(getByTestId('maincard-name').props.children).toBe(props.name);
    });

    test('renderiza a imagem com a URI correta', () => {
        const { getByTestId } = render(<MainCard {...props} />);
        expect(getByTestId('maincard-image').props.source.uri).toBe(props.imgUrl);
    });

    test('hp negativo é mostrado como 0', () => {
        const { getByTestId } = render(<MainCard {...props} />);
        const fullText = getByTestId('maincard-hp').props.children as string;

        const currentHp = parseInt(fullText); 
        expect(currentHp).toBe(0);
    });
});
