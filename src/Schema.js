import * as Yup from 'yup'

const schema = Yup.object().shape({
    name: Yup
    .string()

    .min(2, "Name must be 2 characters long"),
    size: Yup
    ,
    
})