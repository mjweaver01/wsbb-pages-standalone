<template>
  <div class="page louie">
    <HeaderHero
      :heroImage="louieSquatHero"
      title="Louie Simmons"
      subtitle="Westside Barbell Founder"
      :description="heroDescription"
      :listItems="heroListItems"
      buttonText="Read Louie Simmons Articles"
      buttonUrl="https://www.westside-barbell.com/blogs/the-blog/tagged/louie-simmons"
      backgroundColor="rgba(0,0,0,0)"
      textColor="#ffffff"
      titleSize="60px"
      imageAlt="Louie Simmons"
      :imageWidth="2000"
      :imageHeight="1332.9999999999998"
    />
    <Hotlinks :links="hotlinks" />
    <LouiesBackground />
    <CareerEarlyLife />
    <LouieWSBB />
    <ImageSlider :settings="imageSliderSettings" :images="louieImages" />
    <HorizontalAccordion
      sectionId="strength-training-contributions"
      :maxWidth="1360"
      :titles="contributionsTitles"
      :items="contributionsItems"
    />
    <HorizontalAccordion
      sectionId="Inventions"
      :maxWidth="1360"
      :titles="inventionsTitles"
      :items="inventionsItems"
    />
    <Elite />
    <HorizontalTabs
      sectionId="LouiesLegacy"
      :maxWidth="1360"
      :titles="legacyTitles"
      :items="legacyItems"
    />
    <BookInfo />
  </div>
</template>

<script setup lang="ts">
  import HeaderHero from '@/components/HeaderHero.vue'
  import Hotlinks from '@/components/Hotlinks.vue'
  import ImageSlider from '@/components/ImageSlider.vue'
  import HorizontalAccordion from '@/components/HorizontalAccordion.vue'
  import HorizontalTabs from '@/components/HorizontalTabs.vue'

  import LouiesBackground from '@/components/louie/LouiesBackground.vue'
  import CareerEarlyLife from '@/components/louie/CareerEarlyLife.vue'
  import LouieWSBB from '@/components/louie/WSBB.vue'
  import Elite from '@/components/louie/Elite.vue'
  import BookInfo from '@/components/louie/BookInfo.vue'

  // Import all the louie images
  import louieSquatHero from '@/assets/pages/louie/Louie_Simmons_Squat_Hero.jpg'
  import louieAndChuck from '@/assets/pages/louie/Louie_Simmons_and_Chuck_Vogelpoh.jpg'
  import louieAndWestside from '@/assets/pages/louie/Louie_Simmons_and_Westside_Barbe.jpg'
  import louieBenchPress from '@/assets/pages/louie/Louie_Simmons_Bench_Press.jpg'
  import louieDeadliftVintage from '@/assets/pages/louie/Louie_Simmons_Deadlift_Vintage.jpg'
  import louieLiftingBarbell from '@/assets/pages/louie/Louie_Simmons_Lifting_Barbell_at.jpg'
  import louiePushingCar from '@/assets/pages/louie/Louie_Simmons_Pushing_Car_in-Whi.jpg'
  import louieSquatVintage from '@/assets/pages/louie/Louie_Simmons_Squat_Vintage_Powe.jpg'
  import louieSquatting from '@/assets/pages/louie/Louie_Simmons_Squatting.jpg'
  import louieScoutHyper from '@/assets/pages/louie/LouieSimmonsScouthyper.jpg'

  // Hero section data
  const heroDescription = [
    'Louie Simmons was an influential figure in strength and conditioning, renowned for his inventive training methodologies and decades-long career in powerlifting. Born in 1947, he was best known as the founder of Westside Barbell, an exclusive, invitation-only training facility in Columbus, Ohio.',
    'Westside Barbell garnered a reputation as the "Mecca of Powerlifting," boasting several world record holders among its members.',
  ]

  const heroListItems = [
    "He competed in powerlifting for over three decades, achieving 'Elite' status in five weight classes.",
    'Louie developed the <a href="https://www.westside-barbell.com/pages/conjugate-method" style="color:white">Conjugate System</a>, a revolutionary training methodology.',
    'His focus on injury prevention led to the invention of strength training equipment, notably the Reverse Hyper machine.',
    'Sports teams, military and law enforcement, and athletes worldwide adopted his training principles.',
  ]

  // Hotlinks data
  const hotlinks = [
    { href: '#LouiesBackground', text: "Louie's Background" },
    { href: '#CareerAndEarlyLife', text: 'Early Life & Career' },
    { href: '#WestsideBarbell', text: 'Westside Barbell' },
    { href: '#Contributions', text: 'Contributions' },
    { href: '#LouiesLegacy', text: "Louie's Legacy" },
    { href: '#Inventions', text: 'Inventions' },
  ]

  // Image slider data
  const imageSliderSettings = {
    backgroundColor: '#fff',
    addBoxShadow: false,
    title: 'Louie Simmons Photos',
    noTopPadding: false,
    noBottomPadding: false,
  }

  const louieImages = [
    {
      src: louieAndChuck,
      alt: 'Louie Simmons and Chuck Vogelpoh',
    },
    {
      src: louieAndWestside,
      alt: 'Louie Simmons and Westside Barbell',
    },
    {
      src: louieBenchPress,
      alt: 'Louie Simmons Bench Press',
    },
    {
      src: louieDeadliftVintage,
      alt: 'Louie Simmons Deadlift Vintage',
    },
    {
      src: louieLiftingBarbell,
      alt: 'Louie Simmons Lifting Barbell',
    },
    {
      src: louiePushingCar,
      alt: 'Louie Simmons Pushing Car',
    },
    {
      src: louieSquatVintage,
      alt: 'Louie Simmons Vintage Powerlifting',
    },
    {
      src: louieSquatting,
      alt: 'Louie Simmons Squatting',
    },
    {
      src: louieScoutHyper,
      alt: 'Louie Simmons with Scout Hyper',
    },
  ]

  // Contributions section data
  const contributionsTitles = {
    title: 'Strength Training Contributions',
    text: "<p>Louie Simmons' inventive approach to powerlifting sprang from necessity. After suffering several injuries early in his career and seeing his peers face similar predicaments, he identified the traditional approach to lifting as a common issue.</p><p>His innovative approach to athletic training secured his place in the industry, and his methodologies are still widely employed in strength sports gyms today.</p>",
  }

  const contributionsItems = [
    {
      heading: 'Conjugate Method',
      text: "<ul><li>Louie Simmons developed the revolutionary Conjugate Method in response to the traditional approach to lifting.</li><li><a href=\"https://www.westside-barbell.com/pages/conjugate-method\">The Conjugate Method</a> emphasizes training various physical attributes to enhance an athlete's fitness.</li><li>Simmons' innovative approach to athletic training secured his place in the industry, and his methodologies are still widely employed today.</li><li>Simmons received the prestigious Alvin Roy Award for Career Achievement for his significant contributions to the field of strength training.</li><li>His legacy continues to influence athletes' training, establishing him as a pioneer and titan of powerlifting and strength training.</li></ul>",
    },
    {
      heading: 'Box Squats',
      text: '<strong>Box Squats</strong><ul><li>Louie Simmons is recognized for promoting <a href="https://www.westside-barbell.com/blogs/the-blog/how-to-execute-a-proper-box-squat">box squats</a>, which have significant benefits in powerlifting training.</li><li>Box squats help improve lifting technique, increase power and strength, offer versatility in training, enhance recovery, and reinforce consistency.</li><li>Using box squats has been a crucial part of training at Westside Barbell under Simmons\'s guidance.</li></ul><div class="video-responsive-wrapper"><div class="video-responsive"><iframe width="360" height="115" src="https://www.youtube.com/embed/2m4F6jzcYCU?si=ZEjEsIN09gDLNxQS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe></div></div>',
    },
    {
      heading: 'Accommodating Resistance',
      text: "<strong>Chains &amp; Resistance Bands</strong><ul><li>Coach Dave Williams introduced Louie Simmons to Jump Stretch Bands, created by Dick Hartzell from Youngstown, Ohio.</li><li>Louie met with Dick Hartzell a week later, and Louie recognized the bands' potential to transform weight training.</li><li>Louie combined weights and band tension, realizing it as the optimal solution for resistance training.</li><li>Mel Siff visited Westside to understand how chains and rubber bands were used to maintain tension throughout a lift's range of motion.</li><li>\"Supertraining\" featured Louie's work with the Combination of Resistance Methods and his program extendable over multiple years.</li><li>Louie introduced bands and chains to modify barbell exercises, challenging muscles throughout the movement.</li><li>Chains and bands are widely adopted in strength and conditioning for overcoming plateaus and enhancing athletic performance.</li><li>Today, it's a staple in strength and conditioning, contributing to powerlifting and strength training advancements.</li></ul>",
    },
  ]

  // Inventions section data
  const inventionsTitles = {
    title: 'Inventions',
    text: "<p>Not only has Louie Simmons trained some of the most successful powerlifters and athletes in the world, but he's also an accomplished innovator dedicated to revolutionizing how we approach strength training for injury prevention and athletic betterment. Here is a detailed overview of the machines Louie invented and their purpose.</p>",
  }

  const inventionsItems = [
    {
      heading: 'List of Inventions & Patents',
      text: '<ul><li><a href="https://patents.google.com/patent/US5356359A" target="_blank" rel="noreferrer noopener">Original Reverse Hyper: U.S. Pat. 5,356,359</a></li><li><a href="https://patents.google.com/patent/US6491607B2" target="_blank" rel="noreferrer noopener">The Reverse Hyper: U.S. Pat. 6,491,607</a></li><li><a href="https://patents.google.com/patent/US10639515B2" target="_blank" rel="noreferrer noopener">Athletic Training Platform: U.S. Pat. 10,639,515</a></li><li><a href="https://patents.google.com/patent/US7473212B2" target="_blank" rel="noreferrer noopener">Bent Pendulum Reverse Hyper: 7,473,212</a></li><li><a href="https://patents.google.com/patent/US8529413B2" target="_blank" rel="noreferrer noopener">Dual Pendulum: U.S. Pat. 7,473,212</a></li><li><a href="https://patents.google.com/patent/US10974096B2" target="_blank" rel="noreferrer noopener">Maximal Recruiter: U.S. Pat. 10,974,096</a></li><li><a href="https://patents.google.com/patent/US9375599B1" target="_blank" rel="noreferrer noopener">Mechanical Reverse Hyper: U.S. Pat. 9,375,599</a></li><li><a href="https://patents.google.com/patent/US10065060B2" target="_blank" rel="noreferrer noopener">Static-Dynamic Developer: U.S. Pat. 10,065,060</a></li><li><a href="https://patents.google.com/patent/US8007414B2" target="_blank" rel="noreferrer noopener">Inverse Curl: U.S. Pat. 8,007,414</a></li><li><a href="https://patents.google.com/patent/US7435207B2" target="_blank" rel="noreferrer noopener">Scout Reverse Hyper: U.S. Pat. 7,435,207</a></li><li><a href="https://patents.google.com/patent/US7238148B2" target="_blank" rel="noreferrer noopener">Plyoswing: U.S. Pat. 7,238,148</a></li></ul>',
    },
    {
      heading: 'Reverse Hyper',
      text: '<ul><li>Louie Simmons conceived the <a href="https://www.westside-barbell.com/blogs/the-blog/louie-simmons-reverse-hyper">Reverse Hyper machine</a> while recovering from a severe back injury.</li><li>The machine, initially a simple wooden platform, aided his recovery and enabled him to lift over 700 lbs. again, despite a prior severe injury.</li><li>After suffering another back injury, Simmons opted to use the Reverse Hyper machine for his recovery instead of undergoing surgery.</li><li>The Reverse Hyper became a critical part of Louie\'s recovery and strength-building, leading to its widespread use in today\'s strength training community.</li></ul>',
    },
  ]

  // Legacy section data
  const legacyTitles = {
    title: "Louie's Legacy & Impact",
    text: "<p>Louie Simmons' legacy remains prominent and unchallenged in the realm of powerlifting. His innovations continue to influence athletes' training, establishing him as a true pioneer and titan of the sport.</p><p>Under the guidance of Louie Simmons, Westside Barbell became a powerhouse for powerlifters. Let's break down some of the most significant accomplishments achieved.</p><h3>Elite Athletes: 110</h3><p>These figures illustrate the outstanding achievements made at Westside Barbell under the training methodologies of Louie Simmons. Each figure represents significant milestones in powerlifting and strength training, underscoring the impact of Simmons and Westside Barbell in the sport.</p>",
  }

  const legacyItems = [
    {
      heading: 'Elite Squat Athletes',
      text: '<ul><li>800+ lb.: 106 Athletes</li><li>900+ lb.: 35 Athletes</li><li>1000+ lb.: 26 Athletes</li><li>1100+ lb.: 8 Athletes</li><li>1200+ lb.: 3 Athletes</li></ul>',
    },
    {
      heading: 'Elite Deadlift Athletes',
      text: '<ul><li>800+ lb.: 31 Athletes</li><li>900+ lb.: 3 Athletes</li></ul>',
    },
    {
      heading: 'Elite Bench Press Athletes',
      text: '<ul><li>600+ lb.: 99 Athletes</li><li>700+ lb.: 51 Athletes</li><li>800+ lb.: 14 Athletes</li><li>900+ lb.: 4 Athletes</li><li>1005 lb.: 1 Athlete</li></ul>',
    },
    {
      heading: 'Elite Powerlifting Athlete Totals',
      text: '<ul><li>2000+ lb.: 96 Athletes</li><li>2500+ lb.: 15 Athletes</li><li>2600+ lb.: 9 Athletes</li><li>2800+ lb.: 4 Athletes</li><li>All-Time World Record Total (3005 lb.): 1 Athlete</li></ul>',
    },
    {
      heading: 'Additional Contributions',
      text: '<p>Louie Simmons has made significant contributions to the field of strength training, and his impact is felt worldwide. He introduced critical strength training tools like the Weighted Sled and Bench Boards, and his popularization of accommodating resistance methods like Chains and Bands has shifted the conventional training paradigm. His pioneering work on the <a href="https://www.westside-barbell.com/blogs/the-blog/how-to-execute-a-proper-box-squat">Box Squats method</a> has fundamentally redefined squat training.</p><p>One crucial aspect of Simmons\' legacy is his generosity of knowledge. He has shared his insights and techniques through articles in print and online and has always made himself available to discuss strength training with anyone interested. This fosters a sense of community and shared learning</p><p>Simmons\' influence extends far beyond the gym and has become a part of strength training culture at large. He popularized the gym chalkboard concept, a simple but powerful tool that highlights gym lifts and fosters a competitive and supportive culture among athletes.</p>',
    },
    {
      heading: 'Who Did Louie Simmons Train?',
      text: "<p>Simmons' expertise has been recognized and sought after by professional sports teams, serving as a strength consultant for the Cleveland Browns, Green Bay Packers, Seattle Seahawks, and many college football teams. He has worked closely with top-level strength coaches like Kent Johnson, Johnny Parker, and Buddy Morris, disseminating his innovative methods and insights.</p><p>Simmons' influence extends to the world of athletics, having trained two Olympic gold medalists, 400-meter sprinters Butch Reynolds and Moe Robinson. This is further testament to his versatile understanding of strength and conditioning for a wide range of sports disciplines. Louie Simmons' immense contribution to the field of strength training continues to resonate and impact athletes across the globe.</p><ol><li>Sue Benford</li><li>Doris Crawford Simmons</li><li>Mariah Liggett</li><li>Laura Dodd</li><li>Sue Meaney</li><li>Amy Weisberger</li><li>Melissa Stevens</li><li>Pam Crisp</li><li>Heidi Howar</li><li>Sinead Corley</li><li>Tom Paulucci</li><li>Ron Jeter</li><li>Nick Winters</li><li>Matt Dimel</li><li>Dre Henry</li><li>Marlon</li><li>Gabe Ritter</li><li>Bob Young</li><li>Chuck Vogelpohl</li><li>Marcus Marinelli</li><li>Kevin Randleman</li><li>Matt Brown</li><li>Dorian Price</li><li>Kenny Patterson</li><li>Jerry Obradovic</li><li>George Halbert</li><li>J M Blakely</li><li>Jeremy Smith</li><li>Joe McCoy</li><li>Daryl Mayo</li><li>Tim Harold</li><li>Zack Cole</li><li>Josh Gutridge</li><li>Joe Bayles</li><li>Butch Reynolds</li><li>Mark Bell</li><li>Dave Hoff</li><li>Moe Robinson</li><li>Arnold Coleman</li><li>Phil Harrington</li><li>Vlad Alhazov</li><li>Greg Panora</li><li>Don Damron</li><li>Jimmy Ritchie</li><li>Bob Coe</li><li>Chris Spiegel</li><li>Josh Conley</li><li>Jake Norman</li><li>David Jenks</li><li>Matt Smith</li><li>Mike Ruggiera</li><li>Mark Burrows</li><li>Jim Wendler</li><li>Bob Cole</li><li>Jeff Adams</li><li>Karen Sizemore</li><li>Matt Hawkins</li><li>A. J. Roberts</li><li>Laura Phelps-Sweatt and Shane Sweatt</li><li>Brent Tracey</li><li>George Nichols</li><li>Doug Heath</li><li>Jay Fry</li><li>Jason Coker</li><li>Rob Fusner</li><li>Paul Keyes</li><li>Mike Wolfe</li><li>Burley Hawk</li><li>J.L. Holdsworth</li><li>Tony Bolognone</li><li>Jimmy Seitzer</li></ol>",
    },
  ]
</script>
