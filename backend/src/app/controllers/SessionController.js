import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin';

import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'A validação falhou.' });
    }

    const { email, password } = req.body;
    const admin = await Admin.findOne({ where: { email } });

    if (!admin) {
      return res
        .status(400)
        .json({ message: 'Esse administrador não está cadastrado.' });
    }
    console.log('checa senha');
    if (!(await admin.checkPassword(password))) {
      return res
        .status(401)
        .json({ message: 'A senha informada está incorreta' });
    }

    console.log('passou?');

    const { id, name } = admin;

    return res.json({
      admin: { id, name },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
