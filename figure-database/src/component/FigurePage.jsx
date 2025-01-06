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
          <p>
            原型：目出ル金 原型協力：アルター 彩色：緋色(scarlet)+渡邊恭大
            『アズールレーン』より、“グロリアス”が「とらぶるプラム」の東煌風着物姿で登場です。
            盃を手に、衣装をはだけて振り返る艶やかなポーズで立体化。
            背面や前面から垣間見えるボディラインの柔らかそうな肉感や、すっかり酔いが回り紅潮した頬、とろんとした瞳が危うげな色香を漂わせます。
            衣装や髪飾りはパール塗装等を用いて、春節を祝う煌びやかな雰囲気に合わせた彩色となっています。
            パーツの差し替えで東煌風着物無しの姿も再現可能。
            より大胆になるだけでなく、彼女のしなやかな手足の表情などお楽しみ頂けます。
          </p>
        </div>
      </div>
    </>
  )
}
