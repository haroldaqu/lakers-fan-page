const players = [
    // {
    //     id: '',
    //     src: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2345.png?imwidth=1040&imheight=760', 
    //     name: '',
    // },
    {
        id: '2544',
        src: require('/Users/Harold/lakers-fan-page/src/images/lbj.png'), 
        name: 'LeBron James',
        first: 'LeBron',
        last: 'James',
        bio: 'Back for his 20th NBA season, LeBron James is returning for his fifth dance with the Lakers. King James is the only player in the NBA to have won Finals MVP with three different franchises. The 4x MVP and 18x All-Star sits at No. 2 on the All-Time Scoring List.'
    },
    {
        id: '203076',
        src: require('/Users/Harold/lakers-fan-page/src/images/davis.png'), 
        name: 'Anthony Davis',
        first: 'Anthony',
        last: 'Davis',
        bio: 'Anthony Davis is back for his fourth year as the Lakers superstar big man. The All-Star forward is ready to rebound on multiple levels and not only reestablish his dominance in the paint but exhibit his shooting abilities on the perimeter.'
        
    },
    {
        id: '201566',
        src: require('/Users/Harold/lakers-fan-page/src/images/westbrook.png'), 
        name: 'Russell Westbrook',
        first: 'Russell',
        last: 'Westbrook',
        bio: 'In his first season donning the Purple and Gold, Russell Westbrook started and played the most games of any Laker (78 games). Brodie added 10 triple-doubles to his league-leading career stat and finished fourth in the NBA.'
    },
    {
        id: '201571',
        src: require('/Users/Harold/lakers-fan-page/src/images/augustine.png'), 
        name: 'D.J. Augustin',
        first: 'D.J.',
        last: 'Augustin',
        bio: 'The Lakers signed guard D.J. Augustin. Augustin appeared in 34 games (two starts) for Houston this season, averaging 5.4 points, 1.2 rebounds and 2.2 assists in 15.0 minutes per game.'
    },
    {
        id: '203145',
        src: require('/Users/Harold/lakers-fan-page/src/images/bazemore.png'), 
        name: 'Kent Bazemore',
        first: 'Kent',
        last: 'Bazemore',
        bio: 'A former member of the Lakers, Bazemore is back. The nine-year NBA vet returns to the floor equipped with tenacious defense and prowess from three. Kent went 75-for-184 from beyond the arc last season and made his presence known as a perimeter defender.'
    },
    {
        id: '202340',
        src: require('/Users/Harold/lakers-fan-page/src/images/bradley.png'), 
        name: 'Avery Bradley',
        first: 'Avery',
        last: 'Bradley',
        bio: 'Avery Bradley returns for a second stint with the Lakers after spending last season in Miami and Houston. He has been a perennial force on defense and helped the Lakers earn the 3rd best defensive rating in the league during the 2019-20 season.'
    },
    {
        id: '201961',
        src: require('/Users/Harold/lakers-fan-page/src/images/ellington.png'), 
        name: 'Wayne Ellington',
        first: 'Wayne',
        last: 'Ellington',
        bio: 'The Lakers welcome back Wayne Ellington. The elite shooter brings with him 12 years of NBA experience. Ellington is a forward thinker on offense and his perimeter shooting is proficient, hitting 42% from the arc last year and 37% over his past 9 seasons.'
    },
    {
        id: '2730',
        src: require('/Users/Harold/lakers-fan-page/src/images/howard.png'), 
        name: 'Dwight Howard',
        first: 'Dwight',
        last: 'Howard',
        bio: '3x Defensive Player of the Year, 8x All-Star, and member of the 2020 Lakers championship team, Dwight Howard is back in Los Angeles. The center enters his 18th season, owning career averages of 16 points, 12 rebounds, and 1.9 blocks.'
    },
    {
        id: '1626169',
        src: require('/Users/Harold/lakers-fan-page/src/images/johnson.png'), 
        name: 'Stanley Johnson',
        first: 'Stanley',
        last: 'Johnson',
        bio: 'A mid-season signing who turned into one of the most impactful Lakers, Stanley Johnson revived his career in a completely new role in L.A. this season, and might just be back next year.'
    },
    {
        id: '1630644',
        src: require('/Users/Harold/lakers-fan-page/src/images/mcclung.png'), 
        name: 'Mac McClung',
        first: 'Mac',
        last: 'McClung',
        bio: 'Matthew McClung was born on January 06, 1999 in Gate City (VA). His height is six foot three. He is a point guard signed by the Los Angeles Lakers.'
    },
    {
        id: '2546',
        src: require('/Users/Harold/lakers-fan-page/src/images/melo.png'), 
        name: 'Carmelo Anthony',
        first: 'Carmelo',
        last: 'Anthony',
        bio: 'Carmelo Anthony joins the Lake Show and reunites with 2003 draft classmate and USA teammate LeBron James. The 10x NBA All-Star will bring not only 18 years of experience to the team, but precise outside shooting, averaging 41% from three last season'
    },
    {
        id: '1628370',
        src: require('/Users/Harold/lakers-fan-page/src/images/monk.png'), 
        name: 'Malik Monk',
        first: 'Malik',
        last: 'Monk',
        bio: 'Monk thrived from being on the receiving end of the playmaking chops of LeBron James and Russell Westbrook, which in turn streamlined his role and limited any chances of self-destruction'
    },
    {
        id: '1629134',
        src: require('/Users/Harold/lakers-fan-page/src/images/nunn.png'), 
        name: 'Kendrick Nunn',
        first: 'Kendrick',
        last: 'Nunn',
        bio: 'Kendrick Nunn was sidelined all last season due to a persistent knee injury. Technically in his second season with the Lake Show, the combo guard aims to demonstrate his smooth, southpaw shot and perform in front of Lakers Nation for the first time.'
    },
    {
        id: '1630559',
        src: require('/Users/Harold/lakers-fan-page/src/images/reaves.png'), 
        name: 'Austine Reaves',
        first: 'Austin',
        last: 'Reaves',
        bio: 'Time and time again, Austin Reaves rose to the occasion in his ascent in the NBA. The undrafted rookie was a literal definition of a two-way player and showcased his prowess to hit the big shot on one end and lock down top shooters at the other end.'
        
    },
    {
        id: '1629659',
        src: require('/Users/Harold/lakers-fan-page/src/images/tucker.png'), 
        name: 'Talen Horton',
        first: 'Talen',
        last: 'Horton',
        bio: 'Selected by the Orlando Magic with the 46th overall pick in the 2019 NBA Draft. Acquired by the Los Angeles Lakers in exchange for a 2020 second round draft pick and cash considerations on June 20, 2019. Signed with the Lakers on July 13, 2019.'
    },

    {
        id: '1629117',
        src: require('/Users/Harold/lakers-fan-page/src/images/gabriel.png'), 
        name: 'Wenyen Gabriel',
        first: 'Wenyen',
        last: 'Gabriel',
        bio: 'Brought on late last season, Wenyen Gabriel was an instant spark plug to the Lakers lineup. The 25-year-old forward used his powerful, springy talent and added depth to the team’s frontcourt presence.'
    },
]

export default players