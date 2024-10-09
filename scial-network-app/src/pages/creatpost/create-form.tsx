import { title } from "process"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { addDoc, collection } from "firebase/firestore"
import { auth, db } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"

interface CreateFormData {

    title: string;
    description: string;
}


export const CreateForm = () => {

    const [user] = useAuthState(auth)

    const navigate = useNavigate();

    const schema = yup.object().shape({

        title: yup.string().required("the title is required"),
        description: yup.string().required("the description is required")
    })

    const { register, handleSubmit, formState: {errors} } = useForm<CreateFormData>({
        resolver: yupResolver(schema)
    })

    const postRef = collection(db, "posts")
    const creatPost = async (data: CreateFormData) => {

        await addDoc(postRef, {

            title: data.title,
            description: data.description, // ...data (we can replace title and desc with this line of code)
            username: user?.displayName,
            userId: user?.uid
        })

        navigate("/")
    }
    return (
        <form onSubmit={handleSubmit(creatPost)} >
            <input placeholder="Title....."  {...register("title")} />
            <p style={{color: "red"}} > {errors.title?.message} </p>
            <textarea placeholder="Description....."  {...register("description")} />
            <p style={{color: "red"}}> {errors.description?.message} </p>
            <input type="submit" />
        </form>
        )
}