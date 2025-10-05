import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '@components/ui/Button'
import { FormGenerator } from '@components/FormGenerator' // ✅ import it

const initialValues = {
  email: '',
}

const forgotPasswordFields = [
  {
    name: 'email',
    label: 'Email address',
    type: 'email',
    required: true,
    placeholder: 'Enter your email address',
  },
]

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
})

export const ForgotPassword = () => {
  const navigate = useNavigate()

  const handleSubmit = (values: typeof initialValues) => {
    console.log('Reset password for:', values.email)
    navigate('/auth/verify-email')
  }

  return (
    <div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%201-ipIH4sCpFZkBtk5klUe1etfgg1WV6H.png"
          alt="Nimbus"
          className="h-12 w-auto mx-auto"
        />
        <h2 className="text-center m-0 p-0 text-primary-600 text-4xl font-bold">
          Nimbus
        </h2>
      </div>

      <div className="auth-card max-w-[448px] mt-2">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Forgot <span className="text-primary-600">Password?</span>
          </h3>
          <p className="text-sm text-gray-600">
            Enter your email and we’ll send you a code to reset your password.
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <FormGenerator fields={forgotPasswordFields} />
              <Button
                type="submit"
                variant="gradient"
                fullWidth
                label={isSubmitting ? 'Sending...' : 'Send Password Reset'}
                disabled={isSubmitting}
              />
            </Form>
          )}
        </Formik>

        <p className="mt-6 text-center text-sm text-gray-600">
          Remember your password?{' '}
          <Link to="/auth/signin" className="font-medium text-primary-600 hover:text-primary-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
