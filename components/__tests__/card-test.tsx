import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import Card from '../Card';

jest.mock('@expo/vector-icons', () => ({
    MaterialCommunityIcons: () => null,
}));

describe('testar card', () => {


    test('testa se o card existe', () => {
        const { getByTestId } = render(
            <Card> <Text>Teste</Text> </Card>
        )

        expect(getByTestId).toBeTruthy()
    })

    test('testa se o card esta habilitado ou se ele nao esta desabilitado', () => {
        const { getByTestId } = render(
            <Card> <Text>122</Text> </Card>
        )
        const card = getByTestId('card');
        expect(card).not.toBeDisabled()
    })

})