'use client'

import { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'

interface Policy {
  id: number
  customer: string
  number: string
  type: string
  premium: string
}

const emptyPolicy = { customer: '', number: '', type: '', premium: '' }

export default function PolicyManager() {
  const [policies, setPolicies] = useState<Policy[]>([])
  const [form, setForm] = useState<typeof emptyPolicy>(emptyPolicy)

  useEffect(() => {
    const stored = localStorage.getItem('policies')
    if (stored) {
      setPolicies(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('policies', JSON.stringify(policies))
  }, [policies])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const addPolicy = (e: FormEvent) => {
    e.preventDefault()
    if (!form.customer || !form.number) return
    setPolicies([...policies, { id: Date.now(), ...form }])
    setForm(emptyPolicy)
  }

  const removePolicy = (id: number) => {
    setPolicies(policies.filter((p) => p.id !== id))
  }

  return (
    <div className="space-y-6">
      <form onSubmit={addPolicy} className="grid gap-2 md:grid-cols-5">
        <Input
          name="customer"
          value={form.customer}
          onChange={handleChange}
          placeholder="Customer"
        />
        <Input
          name="number"
          value={form.number}
          onChange={handleChange}
          placeholder="Policy #"
        />
        <Input
          name="type"
          value={form.type}
          onChange={handleChange}
          placeholder="Type"
        />
        <Input
          name="premium"
          value={form.premium}
          onChange={handleChange}
          placeholder="Premium"
        />
        <Button type="submit">Add Policy</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Policy #</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Premium</TableHead>
            <TableHead className="w-24"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {policies.map((p) => (
            <TableRow key={p.id}>
              <TableCell>{p.customer}</TableCell>
              <TableCell>{p.number}</TableCell>
              <TableCell>{p.type}</TableCell>
              <TableCell>{p.premium}</TableCell>
              <TableCell>
                <Button size="sm" variant="ghost" onClick={() => removePolicy(p.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
