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
      <p>
        During my first year at the Rijksuniversiteit Groningen (the
        University of Groningen), I was given a selection of small and short
        projects to implement with a project parter (the lovely Ola
        Dybvadskog).
      </p>
      <p>
          A particularly interesting project involved solving an <b>NP </b>
          problem via a genetic algorithm. For those unaware, a genetic
          algorithm tries to find a solution via a simulation of
        <i> evolution </i>, where the organisms that evolve are "solutions" to the problem.
          In principle, better solutions should naturally arise
          and given that there's a "correct solution" for this problem, over a
          long enough iteration period, we should reach the correct solution.
      </p>

      <p>
          The problem itself was the <b>(multi)set partition problem </b>, which
          involved  creating two disjoint sets from the original set, such
          that their sums are the same. A good analogy would be to imagine the
          original set as a collection of wooden cuboids of different lengths. The goal
          is to create two piles of cuboids, such that when you stack up each
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
        The bulk of the code revolves around writing functions to simulate
        various aspects of evolution. Me and Ola felt this was a simple enough
        project to implement in C, though maybe it might have benefitted from
        being implemented in some OOP langauge.
      </p>

      <p>
        Writing the code was simple enough, and it took only a few days.
        Really, the trouble involved finding the best set of parameters for
        the simulation, so it doesn't take too long to find a solution. And that
        took multiple weeks worth of work.
      </p>

      <p>
        Unfortunately, a lot of our analysis (to find those parameters) was somewhat rotten when we realized
        that our program fails spectacularly on difficult original sets.  The problem was that we were
        optimising for speed on relatively simple input sets, without checking that our parameters were sufficient
        for more complex input sets. We had to scrap a lot of code (most of which
        can be found in the history of <code>testing.c</code>).
      </p>

      <p>
        Still, while we couldn't exactly find the optimal set of parameters for our simulation,
        we were able to measure the performance of our program. The core performance parameter being
        "How often do we get a correct answer". Remember, as our program is probabilistic, there's no guarantee
        that we would arrive at a correct solution.
      </p>

      <p>
          This parameter was dependent on another parameter: "<i>How long do we let our solution   evolve </i>".
          Graphing these two parameters against each other yields the following:
        <div class={styles.T2Trend}>
          <img
            src={t2Graph}
            alt='How our program performs as t_2 increases'
          />
        </div>
      </p>

      <p>
        To explain the axes, the independent axis is roughly how long we would let
        our simulation evolve for. The independent axis is more interesting. When
        given an arbitrary data set, you do not know the answer before hand (since
        that's the objective of the program), so you cannot know if, by the end
        of the simulation, you came to the right solution.
      </p>

      <p>
        That said, you can track how often the <it>same</it> answer pops up, over
        multiple generations. And for simulations that evolve long enough, the best
        answer is almost certainly the solution. Hence, we need to track how often
        the best answer re-appears, which is:
        <ul>
          <li> What the dependent axis is</li>
          <li> The performance parameter we are tracking</li>
        </ul>
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
            have allowed us to complete the project on time.
      </p>

      <p>
            It also takes multiple seconds to run. Some of the input cases could
            be optimized, but it doesn't sit right with me for it to take so
            long, for a relatively tiny input set size.
      </p>

      <p>
            That said, the improvements I could make to the project are probably
            not worth the investment, which could be put into more effective
            places so I'm willing to call the project <b> done </b>.
      </p>

    </Post>
  )
}

export default IntroToCSProj
