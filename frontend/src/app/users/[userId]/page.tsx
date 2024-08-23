'use client'

import { useEffect, useState } from 'react'
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";

import apiRouter from '@/api/router'

const defaultState = {
  name: '',
  email: '',
}

export default function EditUser(props) {
  const { params: { userId } } = props

  const [state, setState] = useState(defaultState)
  const { name, email } = state

  const queryClient = useQueryClient()
  
  const { data, isLoading, refetch, status } = useQuery({
    queryKey: ['getUser', userId],
    queryFn: () => apiRouter.users.getUser(userId),
  })

  const updateMutation = useMutation({
    mutationFn: apiRouter.users.updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getUsers'] })
      refetch()
    },
  })

  useEffect(() => {
    if (status === 'success'){
      setState({
        email: data?.email || '',
        name: data?.name || '',
      })
    }
  }, [status])

  return (
    <main className="flex min-h-screen flex-col gap-4 items-center p-24">
      <h1>{data?.name}</h1>

      {!isLoading && (
        <form className="rounded-xl bg-gray-900 p-4 flex flex-col gap-2 justify-center w-72">
          <div className="flex flex-col">
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setState((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))} />
          </div>
          
          <div className="flex flex-col">
            <label>Email</label>
            <input type="text" value={email} onChange={(e) => setState((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))} />
          </div>

          <button onClick={(e) => {
            e.preventDefault()

            updateMutation.mutate({
              id: data?.id,
              email,
              name,
            })
          }}>
            Save
          </button>
        </form>
      )}
    </main>
  )
}