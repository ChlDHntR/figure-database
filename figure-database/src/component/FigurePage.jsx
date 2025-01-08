import { Fragment } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function FigurePage({ data }) {
  const id = useParams().id
  const testData = data.find((element) => element.id == id)
  console.log(testData)

  return (
    <>
      <div className='figureData_wrapper'>
        <div className='figure_name'>
          <h1>{testData.name}</h1>
        </div>
        <div className='figureData'>
          <div className='figure_image'>
            <img src={testData.image} alt={`${testData.name} image`} />
          </div>
          <div className='figure_info'>
            <table>
              <tbody>
                <tr>
                  <th>ブランド名</th>
                </tr>
                <tr>
                  <td>{testData.brand}</td>
                </tr>
                <tr>
                  <th>発売日</th>
                </tr>
                <tr>
                  <td>{testData.date}</td>
                </tr>
                <tr>
                  <th>原作名</th>
                </tr>
                <tr>
                  <td>{testData.series}</td>
                </tr>
                <tr>
                  <th>参考価格</th>
                </tr>
                <tr>
                  <td>{testData.price}円</td>
                </tr>
                <tr>
                  <th>素材</th>
                </tr>
                <tr>
                  <td>PVC/ABS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='figure_about'>
          <h3>解説</h3>
          <p>{testData.about}</p>
        </div>
      </div>
    </>
  )
}
