import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

import { RadioGroup } from 'react-radio-buttons';
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

import { Container, Form, SubmitButton, RadioButton } from './styles';
import Input from '../../components/Input';
import Select from '../../components/Select';
import InputMask from '../../components/InputMask';

import history from '../../services/history';
import api from '../../services/api';

export default function FormPage() {
  useEffect(() => {
    const formDone = localStorage.getItem('done');

    if (formDone) {
      toast.error('Só é permitido preencher o formulário uma vez!');
      history.push('/after');
    }
  }, []);

  const [phone, setPhone] = useState('');
  const [radio, setRadio] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [success, setSuccess] = useState(false);
  const [facebook, setFb] = useState(false);
  const [instagram, setIg] = useState(false);
  const [linkedin, setLn] = useState(false);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        last_name: Yup.string().required(),
        phone_number: Yup.string()
          .min(11)
          .matches(/^[0-9]\d{1}-\d{9}$/)
          .required(),
      });

      await schema.validate(data, { abortEarly: false });
      const socialMedia = [facebook, instagram, linkedin];

      if (
        radio === null ||
        (radio === true && !socialMedia.find(item => item === true))
      ) {
        throw new Error();
      }

      const { got_to_know } = data;
      const has_social = radio;

      const userData = {
        ...data,
        got_to_know,
        has_social: radio,
        social_media: has_social ? socialMedia : null,
      };

      setSuccess(true);

      await api.post('create', userData);

      localStorage.setItem('done', JSON.stringify(success));
      toast.success('Formulário preenchido com sucesso!');
      history.push('/after');
    } catch (error) {
      toast.error('Preencha os dados corretamente!');
    }
  }

  function handleOnRadio(value) {
    if (value === true) {
      setDisabled(false);
      setRadio(true);
    } else {
      setDisabled(true);
      setFb(false);
      setIg(false);
      setLn(false);
      setRadio(false);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <strong>Nome:</strong>
        <Input name="name" type="text" placeholder="Informe seu nome" />
        <strong>Sobrenome:</strong>

        <Input
          name="last_name"
          type="text"
          placeholder="Informe seu sobrenome"
        />
        <strong>Telefone (apenas números):</strong>
        <InputMask
          name="phone_number"
          mask="99-999999999"
          alwaysShowMask
          onChange={e => setPhone(e.target.value)}
          value={phone}
        />

        <strong>Como nos conheceu:</strong>

        <Select
          name="got_to_know"
          placeholder="Selecione..."
          className="known"
        />
        <strong>Possui rede social?:</strong>

        <RadioGroup onChange={handleOnRadio} vertical>
          <RadioButton value={true}>Sim</RadioButton>
          <RadioButton value={false}>Não</RadioButton>
        </RadioGroup>

        <strong>Se sim, selecione embaixo (marque ao menos uma opção):</strong>
        <div className="checkboxes">
          <label>
            <Checkbox
              checked={facebook}
              onChange={() => setFb(!facebook)}
              disabled={disabled}
            />
            <FaFacebookSquare
              size={40}
              color={disabled ? '#999' : '#eee'}
              opacity={disabled ? 0.3 : 1}
            />
          </label>
          <label>
            <Checkbox
              checked={instagram}
              onChange={() => setIg(!instagram)}
              disabled={disabled}
            />
            <FaInstagram
              size={40}
              color={disabled ? '#999' : '#eee'}
              opacity={disabled ? 0.3 : 1}
            />
          </label>
          <label>
            <Checkbox
              checked={linkedin}
              onChange={() => setLn(!linkedin)}
              disabled={disabled}
            />
            <FaLinkedinIn
              size={40}
              color={disabled ? '#999' : '#eee'}
              opacity={disabled ? 0.3 : 1}
            />
          </label>
        </div>
        <SubmitButton disabled={success}>Enviar formulário</SubmitButton>
      </Form>
    </Container>
  );
}
