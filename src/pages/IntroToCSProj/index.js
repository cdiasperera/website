import React from 'react'
import Post from '../../hoc/Post'
// External files
import report from '../../documents/report.pdf'
import t2Graph from '../../images/introToCST2.png'

import styles from './IntroToCSProj.module.css'

const IntroToCSProj = () => {
  return (
    <Post>
        <h1>A solution for the Partition Problem, via a genetic algorithm</h1>
          <h2> Introduction </h2>
          <p>During my first year at the Rijksuniversiteit Groningen (the
            University of Groningen), I were given a choice of small and short
            projects to implement with a project parter (the lovely Ola
            Dybvadskog).
          </p>
          <p>
            A particularly interesting project involved solving an <b>NP </b>
            problem via a genetic algorithm. For those unaware, a genetic
            algorithm tries to find a solution via a simulation of 
            <i> evolution </i>, where the organims that evolve are solution
            "suggestions". In principle, better solutions should naturally arise
            and given tha there's a "correct solution" for this problem, over a
            long enough iteration period, we should reach the correct solution.
          </p>

          <p>
            The problem itself was the (multi)set partition problem, which
            involved  creating two disjoint sets from the original set, such
            that their sums are the same. A good analogy would be to imagine the
            set as a collection of wooden cubes of different lengths. The goal
            is to create two piles of cubes, such that when you stack up each
            pile, their heights are the same.
          </p>

          <h2>The project and some analysis</h2>
          <p>
            Below is a link to the github repository storing the code and
            instructions on how to use the program. I've also included a link to
            the report I wrote on the project.
          </p>
          <p>
            <a href='https://github.com/cdiasperera/GeneticPartitionProblem'>
              Project Source
            </a>
          </p>
          <p>
            <a href={report}> Download report</a>
          </p>

          <p>
            Of course, being a probabilistic algorithm, one might wonder how
            often you get the correct answer. Well, that all depends on the
            answer to the question: "<i>How long do we let our solution
            evolve</i>". Indeed, we can graph how accurate program was, against
            this parameter:
            <div class={styles.T2Trend}>
              <img
                src={t2Graph}
                alt='How our program performs as t_2 increases'
              />
            </div>
          </p>

          <p>
            It's worth noting that we can't really <i>know</i> the solution when
            checking the accuracy of our algorithm. Rather, we can only really
            know its consistency. However, we really only want to know the
            consistency of the best solution, which is what <code>Percentage Similarity</code>
            tracks.
          </p>

          <p>
            We can see that initially, the solution improves linearly, the
            longer we let the simulation run. However, at a certain point, it
            starts to behave logarithmcally.
          </p>

          <h2>Conclusions</h2>
          <p>
            I'm relatively happy with the project, though I am disappointed with
            the analysis of it. I couldn't really find a way to find the best
            parameters for the configuration. At least, not in a way that would
            have allowed us to complete the project in time.
          </p>

          <p>
            It also takes multiple seconds to run. Some of the input cases could
            be optimized, but it doesn't sit right with me for it to take so
            long, for a relatively tiny input set size.
          </p>

          <p>
            That said, the improvements I could make to the project are probably
            not worth the investment, which could be put into more effective 
            places so I'm willing to say that the project is <b> done </b>.
          </p>

    </Post>
  )
}

export default IntroToCSProj