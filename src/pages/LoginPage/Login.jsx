import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
                <label className="form-label" htmlFor="nickName">
                  Ник
                </label>
                <input
                  {...register('nickName', { required: 'Поле обязательно' })}
                  className={`form-control form-control-lg ${errors.nickName && 'is-invalid'}`}
                />
                <ErrorMessage errors={errors} name="nickName" render={({message}) => <div className="invalid-feedback">{message}</div>} />
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
                <ErrorMessage errors={errors} name="password" render={({message}) => <div className="invalid-feedback">{message}</div>} />
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
