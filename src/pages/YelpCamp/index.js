import React from 'react'
import Post from '../../hoc/Post'

import yelpcamp from '../../images/yelpcamp.png'

import styles from './YelpCamp.module.css'

const YelpCamp = () => {
  return (
    <Post>
      <h1> My first website: YelpCamp</h1>
      <p>
        Yonks ago, back before I even starting programming seriously, I made a
        simply CRUD website, following a course on <a href='https://www.udemy.com/course/the-web-developer-bootcamp/'> Udemy </a>.
        It was a Yelp-clone for camping sites around the United States, with an
        added social-media element to it. I called it <a href='http://yelpcampcdp.herokuapp.com/'>YelpCamp</a> (surprise surprise).
      </p>

      <p>
        It was actually a pretty tough project for me at the time. I had some
        cursory programming knowledge, but I knew nothing of web development,
        not even HTML. It's honestly quite difficult to list exactly what I had
        learned, just because I had to learn so much.
      </p>

      <img className={styles.YelpCampImg} src={yelpcamp} alt='Yelpcamp homepage' />

      <p>
        Even going beyond the langauges and the frameworks, learning about
        authorization and authentication, design, testing, and even a bit of web
        scapring, really dragged out the project. For such a simple website,
        there was a lot of work put into it.
      </p>

      <p>
        It's not the most inspired idea, nor is it a particularly pretty
        website. But I do think it's a pretty decent first effort.
      </p>

      <p>
        P.S: The website is up and running, but it might be "sleeping" as its
        hosted on Heroku. It might take 5 to 10 seconds to initially load.
        Also, there's probably some security flaws in it, so don't use any
        contact information you wouldn't want to be leaked.
      </p>
    </Post>
  )
}

export default YelpCamp
