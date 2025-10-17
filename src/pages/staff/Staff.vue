<script setup lang="ts">
  import ImageCallout from '@/components/staff/ImageCallout.vue'
  import type { CalloutItem } from '@/types'

  import louieStaff from '@/assets/pages/staff/Louie_Simmons_Staff.png'
  import tomBarry from '@/assets/pages/staff/1_24_24_DE_Photos-27.png'
  import burleyHawk from '@/assets/pages/staff/Screen_Shot_2021-11-27_at_10.58.png'
  import macMcFarland from '@/assets/pages/staff/Mac.png'

  const staffMembers: CalloutItem[] = [
    {
      id: 'louie-simmons',
      name: 'Louie Simmons',
      title: 'Founder of Westside Barbell',
      image: {
        src: louieStaff,
        alt: 'Louie Simmons - Founder of Westside Barbell',
        width: 504,
        height: 774,
      },
      imagePosition: 'left',
      style: {
        scrollMarginTop: '100px',
      },
      content: [
        'Louie Simmons was a world-renowned Strength/Special Strengths coach and the founder of Westside Barbell. He was in the gym every day watching and analyzing all athletic training from all his powerlifters to track and field. Westside Barbell was a living laboratory for Louie where he conducted constant athletic experiments to push the boundaries of what is possible.',
        'Louie coached 24 athletes who deadlift over 800 pounds and three who deadlift over 900lbs, fifteen members who have a total lifting record over 2500 pounds and seven over 2600 pound total. Westside Barbell is the only gym in the world to have two over 2700 pound totals, plus five over 2800 pounds and one who has the biggest total of all time with 3005lbs.',
        'Louie published over 300 training articles, authored eight books, and produced ten highly respected training videos. Louie Simmons also the invented the Reverse Hyper® machine, Inverse Curl machine, Hip/Quad machine, Static/Dynamic developer and the Virtual Force Swing.',
        'He was a strength consultant for the Cleveland Browns, Green Bay Packers, Seattle Seahawks, and numerous college football teams. Louie worked closely with Kent Johnson, Johnny Parker, and Buddy Morris and a host of other professional and top-level strength coaches. Additionally, he trained 2 Olympic gold medal sprinters, Butch Reynolds and Moe Robinson, both 400-meter sprinters.',
        "On his passing, Louie's wife Doris Simmons took over sole ownership of Westside Barbell.",
      ],
    },
    {
      id: 'tom-barry',
      name: 'TOM BARRY',
      subtitle: 'President',
      image: {
        src: tomBarry,
        alt: 'Tom Barry - President',
        width: 504,
        height: 756,
      },
      imagePosition: 'right',
      style: {
        scrollMarginTop: '100px',
      },
      content: [
        'Tom Barry is a seasoned strength and conditioning coach with over 16 years of experience. He has honed his expertise by closely collaborating with elite athletes from various disciplines, including the NFL, UFC, Track and Field, Jiu-Jitsu, and Wrestling.',
        "The late legendary Louie Simmons handpicked Tom to carry forward the legacy of Westside Barbell under his wife Doris's ownership. From his mentorship with the iconic Louie Simmons, Tom is poised to usher in a new era for Westside Barbell. His mission is to ensure that the business and gym thrive while innovatively evolving, all while preserving the illustrious legacy left behind by Louie Simmons.",
        'Westside-Barbell.com: A Hub of Strength Training Knowledge',
        "Tom's commitment to this mission is evident through Westside-Barbell.com, where he and his team generously share valuable knowledge and resources about the strength training methodologies and philosophy developed by the Westside Barbell community.",
        'The website serves as a central hub for those eager to explore the intricacies of the conjugate method and its applications across various domains, including general training, athletic performance, powerlifting, grappling, combat sports, and football, among others.',
      ],
      links: [
        {
          text: 'Westside-Barbell.com',
          href: 'https://westside-barbell.com',
          target: '_blank',
          rel: 'noreferrer noopener',
        },
      ],
    },
    {
      name: 'Burley Hawk',
      title: 'Digital Content Manager',
      image: {
        src: burleyHawk,
        alt: 'Burley Hawk - Digital Content Manager',
        width: 504,
        height: 554,
      },
      imagePosition: 'left',
      content: [
        'Burley Hawk is the Digital Content Manager at Westside Barbell and a Conjugate Method strength coach.',
        'Training and studying under Louie Simmons over the past decade, Burley has attained the experience, knowledge and understanding necessary to master the Conjugate Method.',
        "A longtime member of Westside Barbell, and a loyal student of Louie's, Burley remains dedicated to delivering the Westside Barbell message to the digital world.",
      ],
    },
    {
      name: 'Mac McFarland',
      title: 'Westside Barbell HQ S&C Coach',
      image: {
        src: macMcFarland,
        alt: 'Mac McFarland - Westside Barbell HQ S&C Coach',
        width: 504,
        height: 814,
      },
      imagePosition: 'right',
      content: [
        'Mac McFarland is a member of the Westside Barbell team with a background in the United States Marine Corps and academics.',
        'He served eight years in the Marine Corps Infantry, gaining valuable leadership experience.',
        'In the field of education, Mac completed a Master of Science degree from The University of Texas Rio Grande Valley and was recognized as an Academic All-American, reflecting his commitment to both academics and athletics.',
        'After his time in the military, Mac focused on strength and conditioning. He brings his knowledge to Westside Barbell as a strength and conditioning coach, helping others achieve their goals.',
        "Since joining Westside Barbell in 2022, Mac's responsibilities have included leading seminars, engaging with various athletes, managing social media content, conducting gym tours, and reviewing equipment.",
        "Mac McFarland's role at Westside Barbell is multifaceted, contributing to the team through his experience in both the military and strength training.",
      ],
    },
  ]
</script>

<template>
  <div class="page cms-page staff">
    <div class="max-width">
      <div class="no-image-category-hero-wrapper">
        <div class="category-hero tablet-constrain-items">
          <div class="category-hero-inner category-hero-no-image">
            <div class="hero">
              <h1 class="hero"><span>Staff</span></h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="constrain-items">
      <!-- staff -->
      <ImageCallout :items="staffMembers" />
    </section>
  </div>
</template>
