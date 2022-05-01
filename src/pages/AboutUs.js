import React from 'react';
import vivian from './vivian-headshot.jpg';
import andy from './andy-headshot.jpg';
import susy from './susy-headshot.png';
import rux from './rux-headshot.jpg';
import kat from './kat-headshot.jpg';

const AboutUs = ()=> {

return (
  <>
    <div class="background"></div>
    <div class="section2">
      <h1 class ="heading-10">About Us</h1>
      <div class="container">
        <div class="text-block-2 pad-vertical pad-horizontal"> We are re-imagining sexual health care.</div>
        <div class="text-block-4 pad-horizontal"><i>deSTIgma</i> was founded in 2022 by a group of friends who saw and experienced how the stigma against STIs was causing them and their peers to forego necessary medical attention. We found disheartening data that STIs were still highly prevalent in the U.S., affecting millions of young adults such as ourselves. We proposed the <i>deSTIgma</i> digital platform as a way to reach the greatest number of people and provide them with the knowledge and resources necessary to make informed decisions about their sexual health and wellness. We present <i>deSTIgma</i> as a modern tool that streamlines the STI-care seeking process, making it easier for people to find the care they need without feeling afraid or embarrassed for themselves. </div>
        <div class="text-block-4 pad-vertical pad-horizontal"> The <i>deSTIgma</i> team is made up of several multi-faceted individuals, with expertise in app development, professional communication, data analytics, and more. Two core team members are members of the Sia Lab, known for its HIV diagnostic technology and global-scale commercialization. Others have conducted extensive research in the Azizi Lab and the Zuckerman Institute at Columbia University, which specialize in computational cancer biology and theoretical neuroscience, respectively. Through our research at Columbia, we are closely connected with a network of faculty, physicians, and staff who have and will continue to provide advising and mentorship throughout our growth and development. Thus, <i>deSTIgma</i> is well positioned to bring our solution to the public. </div>
      </div>
    </div>
    <div class="section">
      <div class ="text-block-2"><strong>Core Team</strong></div>
      <div class= "row">
        <div class="column left">
          <div class="subheading-home-1"> Vivian Shi</div>
          <div class="text-block-4"> Vivian is an incoming graduate student at Boston University, studying Tissue Engineering. She has experience in microscopy, image processing, and now website design. She loves art museums, rock climbing, and vegan food.</div>
        </div>

        <div class=" right">
          <a href= "https://www.linkedin.com/in/vivianshi01/" target="blank"> <img src={vivian} id="vivian" class="headshot" alt="Vivian Shi headshot"/></a></div>

      </div>

      <div class= "row">
        <div class="column left">
          <div class="subheading-home-1"> Susanna Baek</div>
          <div class="text-block-4">Susanna Baek is an incoming graduate student at Columbia University, studying Biomedical Engineering. She is currently doing research at Dr. Sam Sia’s lab known for their application of microfluidics in point-of-care diagnostics and mobile health, and therapeutics with cell and tissue engineering. She enjoys spending her free time with her friends, playing music, penny boarding, and traveling! </div>
        </div>

        <div class="column right">
          <img src={susy} id="casesperyear" class="headshot" alt="sans"/></div>

      </div>

      <div class= "row">
        <div class="column left">
          <div class="subheading-home-1"> Ruxandra Tonea</div>
          <div class="text-block-4">Ruxandra is an incoming graduate student at University of Chicago studying Immunoengineering. She has experience with synthetic genetic circuits in bacteria and computational analysis of single-cell RNA-seq data. She likes taking long walks, skating, and traveling.</div>
        </div>

        <div class="column right">
          <img src={rux} id="casesperyear" class="headshot" alt="sans"/></div>

      </div>

      <div class= "row">
        <div class="column left">
          <div class="subheading-home-1"> Andy Garcia</div>
          <div class="text-block-4">Andy is an anticipated May 2022 graduate of Columbia University who has spent the past four years advocating for Latino students across the University in several capacities, while studying Biomedical Engineering. He is currently evaluating post-graduate opportunities, and is excited to reunite with his two-year old Border Collie, Valentina, soon. In his free time, he enjoys running and spending time outdoors.</div>
        </div>

        <div class="column right">
          <img src={andy} id="casesperyear" class="headshot" alt="sans"/></div>
      </div>

      <div class= "row">
        <div class="column left">
          <div class="subheading-home-1"> Katharyn Fatehi</div>
          <div class="text-block-4"> Katharyn Fatehi is an anticipated May 2022 graduate of Columbia University. She is currently doing research in Dr. Sam Sia’s lab (similar to Susanna) along with an ongoing project that involves modeling bee arithmetics using neural networks and reinforcement learning. In her free time, Katharyn enjoys playing soccer, listening to music, and hanging out with friends. </div>
        </div>

        <div class="column right">
          <img src={kat} id="casesperyear" class="headshot" alt="sans"/></div>
      </div>
    </div>

    <div class="section">
      <div class="text-block-2"><strong>Supervisors</strong></div>

      <div class= "row">
        <div class="column left">
        <div class="subheading-home-1"> Jaan Altosaar, PhD</div>
          <div class="text-block-4"><i>Project Mentor</i></div>
          <div class="text-block-4"> Post-doctoral researcher at Columbia University Irving Medical Center</div>
        </div>

        <div class="column right">
          <img src="https://thumbs.gfycat.com/BitesizedDeafeningFlounder-max-1mb.gif" id="casesperyear" class="graph1" alt="sans"/></div>
      </div>
    </div>

  </>
)
}

export default AboutUs;
