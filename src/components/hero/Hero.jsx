import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-container'>
      <h1>Nuestos Planes</h1>
      <div className="card">
            <Card title="Travel to Rome">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </div>
        <div className="card">
            <Card title="Travel to Paris">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </div>
        <div className="card flex justify-content-center ">
            <Button label="Ver mas" />
        </div>
    </div>
  )
}

export default Hero