import {Formik, Form, Field} from 'formik'

export function PostForm() {
  return (
    <div>
      <Formik
        initialValues={{
          tittle:"",
          description:""
        }}
        onSubmit={(values, actions) =>{
          console.log(values)
        }}
      >
        {({handleSubmit}) =>(
          <Form onSubmit={handleSubmit}>
            <Field name = "tittle" placeholder="tittle" />
            <Field name = "description" placeholder="description" />
            <button type='submit'> Save </button>
          </Form>
        )}
      </Formik>

    </div>

  );
}