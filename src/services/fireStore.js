import { db } from '../firebase-config'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'

const listCollectionRef = collection(db, "list")

export function fetchList() {
    return getDocs(listCollectionRef).then((res) => {
        return res.docs.map(
            (doc) => { return { ...doc.data(), id: doc.id } }
        )
    })
}

export const createNew = async (newItem) => {
    await addDoc(listCollectionRef, {
        item01: newItem
    })
}

export const updateItem = async (id) => {
    const itemDoc = doc(db, "list", id)
    const newFields = { item01: 'aaaaaaaaaa' }
    await updateDoc(itemDoc, newFields);
}

export const deleteItem = async (id) => {
    const itemDoc = doc(db, "list", id)
    await deleteDoc(itemDoc);
}

