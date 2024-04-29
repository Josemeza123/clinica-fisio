import React from 'react'

const TablaProductos = () => {
  return (
    <div>
      <table className="table-auto w-full">
        <thead className="bg-gray-50 border-b-2 borde-gray-200">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Código</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Nombre</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Detalle</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Stock</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            < td className="p3 text-sm text-gray-700 ">7777777</td>
            < td className="p3 text-sm text-gray-700 ">Malcolm Lockyer</td>
            < td className="p3 text-sm text-gray-700 ">Malcolm Lockyer</td>
            < td className="p3 text-sm text-gray-700 ">999999999</td>
            < td className="p3 text-sm text-gray-700 ">example@example.com</td>
          </tr>
          <tr className="bg-white">
            < td className="p3 text-sm text-gray-700 ">7777777</td>
            < td className="p3 text-sm text-gray-700 ">Malcolm Lockyer</td>
            < td className="p3 text-sm text-gray-700 ">Malcolm Lockyer</td>
            < td className="p3 text-sm text-gray-700 ">999999999</td>
            < td className="p3 text-sm text-gray-700 ">example@example.com</td>
          </tr>
          <tr className="bg-white">
            < td className="p3 text-sm text-gray-700 ">7777777</td>
            < td className="p3 text-sm text-gray-700 ">Malcolm Lockyer</td>
            < td className="p3 text-sm text-gray-700 ">Malcolm Lockyer</td>
            < td className="p3 text-sm text-gray-700 ">999999999</td>
            < td className="p3 text-sm text-gray-700 ">example@example.com</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}

export default TablaProductos
