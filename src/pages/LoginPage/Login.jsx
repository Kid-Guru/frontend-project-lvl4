import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/Auth';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { signIn, isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm();

  const onSubmit = ({ login, password }) => {
    signIn(login, password)
      .then(() => navigate(from, { replace: true }))
      .catch((e) => [
        {
          type: 'manual',
          name: 'login',
          message: 'Неверный логин или пароль'
        },
        {
          type: 'manual',
          name: 'password',
          message: 'Неверный логин или пароль'
        }
      ].forEach(({ name, type, message }) =>
      setError(name, { type, message })
    ));
  };

  useEffect(() => {
    if (isAuth) navigate('/', { replace: true });
  }, [isAuth]);

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="login">
                  Ник
                </label>
                <input
                  {...register('login', { required: 'Поле обязательно' })}
                  className={`form-control form-control-lg ${errors.login && 'is-invalid'}`}
                />
                <ErrorMessage errors={errors} name="login" render={({ message }) => <div className="invalid-feedback">{message}</div>} />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="password">
                  Пароль
                </label>
                <input
                  type="password"
                  {...register('password', { required: 'Поле обязательно' })}
                  className={`form-control form-control-lg ${errors.password && 'is-invalid'}`}
                />
                <ErrorMessage errors={errors} name="password" render={({ message }) => <div className="invalid-feedback">{message}</div>} />
              </div>

              <div className="d-flex justify-content-around align-items-center mb-4">
                <a href="#">Нет аккаунта</a>
              </div>

              <button type="submit" className="btn btn-primary btn-lg btn-block">
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { LoginPage };
