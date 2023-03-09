import React from 'react'
import Image from 'next/image'
import styles from '../AboutPage/aboutpage.module.css'

const AboutPage = () => {
    return (

        <div className={styles.container}>
            <div className={styles.img}>
          <Image src="https://res.cloudinary.com/dgqnhhjgo/image/upload/v1678246494/nit_gate_ubkcbf.jpg"
               width={1624} height={236} alt="sac" />
               <h1>About SAC</h1>
            </div>
        <div className={styles.main1}>
            <div className={styles.left} >
                <Image src="https://res.cloudinary.com/dgqnhhjgo/image/upload/v1678332156/pexels-cl%C3%A9ment-proust-14641908_hrsnpe.jpg"
                    width={524} height={326} alt="sac" />
            </div>
            <div className={styles.right}>
                <h1>About SAC</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius qui saepe, odit quis ipsa hic vel distinctio illum quas! Ut quasi nobis pariatur quaerat enim iusto sed ipsum facilis obcaecati eaque praesentium eligendi rem modi nemo, tenetur alias voluptate natus quas aperiam a! Repellendus delectus amet repellat, ea libero officiis assumenda dignissimos, dolore quas necessitatibus iure veniam. Blanditiis suscipit sapiente qui laudantium asperiores quibusdam pariatur facilis minima aliquam consequuntur mollitia eveniet, natus explicabo in odio, cumque rerum distinctio recusandae. Quia esse, consequuntur commodi hic excepturi natus libero facere expedita reprehenderit animi distinctio cumque? Error fugit labore aspernatur, magni mollitia vitae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illum fugit mollitia sint odit distinctio ratione blanditiis iste harum vitae id, fugiat repudiandae omnis, quasi consectetur natus nam excepturi ipsum! Ipsa adipisci expedita repellendus assumenda exercitationem possimus voluptatibus minus, dolor veritatis! Aut, voluptatibus beatae? Expedita repellendus cumque amet, fugit dolorem optio. Illo amet pariatur ipsa fugiat magni saepe quaerat harum.</p>

            </div>
        </div>
        <div className={styles.main2}>
            <div className={styles.left} >
                <Image src="https://res.cloudinary.com/dgqnhhjgo/image/upload/v1678342239/pexels-jean-paul-montanaro-14842130_ewmsiq.jpg"
                    width={524} height={326} alt="sac" />
            </div>
            <div className={styles.right}>
                <h1>Vision</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius qui saepe, odit quis ipsa hic vel distinctio illum quas! Ut quasi nobis pariatur quaerat enim iusto sed ipsum facilis obcaecati eaque praesentium eligendi rem modi nemo, tenetur alias voluptate natus quas aperiam a! Repellendus delectus amet repellat, ea libero officiis assumenda dignissimos, dolore quas necessitatibus iure veniam. Blanditiis suscipit sapiente qui laudantium asperiores quibusdam pariatur facilis minima aliquam consequuntur mollitia eveniet, natus explicabo in odio, cumque rerum distinctio recusandae. Quia esse, consequuntur commodi hic excepturi natus libero facere expedita reprehenderit animi distinctio cumque? Error fugit labore aspernatur, magni mollitia vitae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illum fugit mollitia sint odit distinctio ratione blanditiis iste harum vitae id, fugiat repudiandae omnis, quasi consectetur natus nam excepturi ipsum! Ipsa adipisci expedita repellendus assumenda exercitationem possimus voluptatibus minus, dolor veritatis! Aut, voluptatibus beatae? Expedita repellendus cumque amet, fugit dolorem optio. Illo amet pariatur ipsa fugiat magni saepe quaerat harum.</p>
                
            </div>
        </div>
        </div>
    )
}

export default AboutPage