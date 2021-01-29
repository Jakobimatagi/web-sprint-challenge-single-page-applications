import * as Yup from 'yup'

export default Yup.object().shape({
    name: Yup
    .string()
    .min(2, "Name must be 2 characters long"),
    size: Yup,

    toppings: Yup,

    special: Yup,

    topping1: Yup,
    topping2: Yup,
    topping3: Yup,
    topping4: Yup
    
})