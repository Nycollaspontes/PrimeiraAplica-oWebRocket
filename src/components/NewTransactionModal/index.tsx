import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
interface newTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;

}
export function NewtransactionModal({ isOpen, onRequestClose }: newTransactionModalProps) {
    const [type, setType] = useState('deposit')
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');



    function handleNewCreateTransaction(event: FormEvent) {
        event.preventDefault();
     const  data = {
            title,
            value ,
            category , 
            type
        }

    }



    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button type='button'
                onClick={onRequestClose}
                className='react-modal-close'>
                <img src={closeImg} alt="Fechar Modal" />

            </button>
            <Container onSubmit={handleNewCreateTransaction}>
                <h2>Cadastrar Transação</h2>
                <input
                    type="text"
                    placeholder="Titulo"
                    value={title}
                    onChange = {event => setTitle(event.target.value)}
                />

                <input
                    type="numeric"
                    placeholder="Valor"
                    value={value}
                    onChange ={event => setValue(Number(event.target.value))}


                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={IncomeImg} alt="Entrada" />
                        <span>
                            Entrada
                        </span>
                    </ RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={OutcomeImg} alt="Saida" />
                        <span>
                            Saida
                        </span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange = {event => setCategory(event.target.value)}
                />

                <button
                    type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>

    );
}