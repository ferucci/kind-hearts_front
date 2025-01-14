import { Button, ControlledTextField, Typography, useFormHook } from '@/components'
import { APP_ROUTES } from '@/utils'

import s from './form.module.scss'
import { Props } from '@/common/interface'

export const Form = ({ data }: Props) => {
  const { form } = data[0]
  const { control, errors, formRef, submitFormHandler } = useFormHook()

  return (
    <form className={s.form} onSubmit={submitFormHandler} ref={formRef}>
      <div className={s.fields}>
        <ControlledTextField
          as={'input'}
          control={control}
          errorMessage={errors.name?.message}
          name={'name'}
          placeholder={`${form.fields.name || 'Introduce yourself'}`}
        />
        <ControlledTextField
          as={'input'}
          control={control}
          errorMessage={errors.name?.message}
          name={'email'}
          placeholder={`${form.fields.email || 'Enter email address'}`}
        />
        <ControlledTextField
          as={'textarea'}
          control={control}
          errorMessage={errors.message?.message}
          name={'message'}
          placeholder={`${form.fields.description || 'Your question'}`}
        />
      </div>
      <Typography className={s.police}>
        By&nbsp;clicking Submit, you are agreeing <br /> to our{' '}
        <Typography as={'a'} className={s.link} href={APP_ROUTES.privacyPolicy}>
          Privacy Policy
        </Typography>
        .
      </Typography>
      <Button className={s.button} disabled={!!Object.keys(errors).length} type={'submit'}>
        Submit
      </Button>
    </form>
  )
}
