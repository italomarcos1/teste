import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      last_name: Yup.string().required(),
      phone_number: Yup.string().required(),
      got_to_know: Yup.string().required(),
      has_social: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ message: 'Os dados não foram preenchidos corretamente.' });
    }

    const itAlreadyExists = await User.findOne({
      where: { phone_number: req.body.phone_number },
    });

    if (itAlreadyExists) {
      return res.status(400).json({
        message: 'Já existe um usuário cadastrado com esse número de telefone.',
      });
    }

    const user = await User.create(req.body);

    return res.json(user);
  }

  async index(req, res) {
    const data = await User.findAll();

    return res.json(data);
  }
}

export default new UserController();
