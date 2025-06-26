import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import MainCard from '../cards/MainCard';

jest.mock('@expo/vector-icons', () => ({
  MaterialCommunityIcons: () => null,
}));


describe('testar Main Card', () => {

    const props = {
    title: "Batalha Épica",
    participating: 5,
    imgUrl: "https://static.vecteezy.com/system/resources/thumbnails/050/597/886/small/red-dragon-head-illustration-png.png",
    name: "Dragão Vermelho",
    hp: -2,
    damageDone: 800
  };

    test('renderizar Titulo', () => {
        const { getByText } = render(<MainCard {...props}/>);
        
        expect(getByText("Batalha Épica").props.children).toBeTruthy();
    })

    test('renderizar nome', () => {
        const { getByText } = render(<MainCard {...props}/>);
        
        expect(getByText("Dragão Vermelho")).toBeVisible()
    })

    test('renderizar img', () => {
        const { getByTestId } = render(<MainCard {...props}/>);
        
        expect(getByTestId("img").props.source.uri).toBe(props.imgUrl);
    })

    test('se o hp não aceita numeros negativos', () => {
        const { getByTestId } = render(<MainCard {...props}/>);
        const stringHP = getByTestId("hp").props.children.join("");
        const hp = parseInt(stringHP);

        expect(hp).toBe(0);
    })
})