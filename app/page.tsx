import GoogleButton from '@/components/GoogleButton'
import { getAuthServerSession } from '@/app/api/auth/[...nextauth]/route'
import { columns } from './components/columns'
import { DataTable } from './components/data-table'
import { UserNav } from './components/user-nav'
import { getData } from './data'

export default async function TaskPage() {
  const data = await getData()
  const session = await getAuthServerSession()

  return (
    <>
      <div className='h-full flex-1 flex-col space-y-8 p-8 flex'>
        <div className='flex items-center justify-between space-y-2 gap-x-10'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>
              Codeforces IIT(BHU) Ranklist
            </h2>
            <p className='text-muted-foreground'>
              Signup with institute id to add your own handles
            </p>
          </div>
          {session ? <UserNav /> : <GoogleButton text='Sign In' />}
        </div>
        <DataTable data={data} columns={columns} />
      </div>
    </>
  )
}
