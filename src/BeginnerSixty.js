import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import popUp from './Popup.js';

export default function BeginnerSixty() {
  let [index, setIndex] = useState(0);
  let [count, setCount] = useState(60);
  let [imageArray] = useState([
    'img1',
    'img2',
    'img3',
    'img5',
    'img7',
    'img8',
    'img9',
    'img10',
    'img11',
    'img14',
    'img15',
    'img16',
    'img19',
    'img20',
    'img21',
    'img25',
  ]);
  let [textArray] = useState([
    'Tadasana - Mountain pose',
    'Uttanasana - Forward bending',
    'Trikonasana - Triangle pose',
    'Virabhadra - Warrior III pose',
    'Virabhadrasana - Warrior I pose',
    'Utkatasana - Chair pose',
    'Adho Mukha Svanasana - Downwoard dog',
    'Bhujangasana - Cobra pose',
    'Setu Bandha Sarvangasana - Bridge pose',
    'Ananda Balasana - Happy baby pose',
    'Navasana - Boat pose',
    'Phalakasana - Plank pose',
    'Matsyendrasana - Half Lord of the fishes',
    'Paschimottanasana - Forward bending',
    'Salamba Sarvangasana - Shoulder stand',
    'Savasana - Corps pose',
  ]);

  let [instructionsArray, setInstructionsArray] = useState([
    'Stand with the bases of your big toes touching, heels slightly apart (so that your second toes are parallel). Lift and spread your toes and the balls of your feet, then lay them softly down on the floor. Rock back and forth and side to side. Gradually reduce this swaying to a standstill, with your weight balanced evenly on the feet.',
    'Stand upright with your inner feet parallel and about six inches apart. Contract your front thigh muscles to lift your kneecaps. Keeping your legs completely straight, exhale and bend forward from your hip joints, moving your torso and head as one unit.',
    'Raise your arms parallel to the floor and reach them actively out to the sides, shoulder blades wide, palms down. Turn your left foot in slightly to the right and your right foot out to the right 90 degrees. Align the right heel with the left heel. Firm your thighs and turn your right thigh outward, so that the center of the right knee cap is in line with the center of the right ankle.',
    'With an exhale, step or lightly jump your feet 31/2 to 4 feet apart. Raise your arms perpendicular to the floor (and parallel to each other), and reach actively through the little-finger sides of the hands toward the ceiling. Firm your scapulas against your back and draw them down toward the coccyx. Turn your left foot in 45 to 60 degrees to the right and your right foot out 90 degrees to the right. Align the right heel with the left heel. Exhale and rotate your torso to the right, squaring the front of your pelvis as much as possible with the front edge of your mat.',
    'Come onto the floor on your hands and knees. Set your knees directly below your hips and your hands slightly forward of your shoulders. Spread your palms, index fingers parallel or slightly turned out, and turn your toes under. Exhale and lift your knees away from the floor. At first keep the knees slightly bent and the heels lifted away from the floor. Lengthen your tailbone away from the back of your pelvis and press it lightly toward the pubis. Against this resistance, lift the sitting bones toward the ceiling, and from your inner ankles draw the inner legs up into the groins.',
    'Lie prone on the floor. Stretch your legs back, tops of the feet on the floor. Spread your hands on the floor under your shoulders. Hug the elbows back into your body. Press the tops of the feet and thighs and the pubis firmly into the floor. On an inhalation, begin to straighten the arms to lift the chest off the floor, going only to the height at which you can maintain a connection through your pubis to your legs. Press the tailbone toward the pubis and lift the pubis toward the navel. Narrow the hip points. Firm but do not harden the buttocks.',
    'Lie supine on the floor, and if necessary, place a thickly folded blanket under your shoulders to protect your neck. Bend your knees and set your feet on the floor, heels as close to the sitting bones as possible. Exhale and, pressing your inner feet and arms actively into the floor, push your tailbone upward toward the pubis, firming (but not hardening) the buttocks, and lift the buttocks off the floor. Keep your thighs and inner feet parallel. Clasp the hands below your pelvis and extend through the arms to help you stay on the tops of your shoulders.',
    'Lie on your back. With an exhale, bend your knees into your belly. Inhale, grip the outsides of your feet with your hands (if you have difficulty holding the feet directly with your hands, hold onto a belt looped over each sole.) Open your knees slightly wider than your torso, then bring them up toward your armpits.',
    'MSit on the floor with your legs straight out in front of you, buttocks supported on a folded blanket. Bend your knees, put your feet on the floor, then slide your left foot under your right leg to the outside of your right hip. Lay the outside of the left leg on the floor. Step the right foot over the left leg and stand it on the floor outside your left hip. The right knee will point directly up at the ceiling.',
    'Sit on the floor with your buttocks supported on a folded blanket and your legs straight in front of you. Press actively through your heels. Rock slightly onto your left buttock, and pull your right sitting bone away from the heel with your right hand. Repeat on the other side. Turn the top thighs in slightly and press them down into the floor. Press through your palms or finger tips on the floor beside your hips and lift the top of the sternum toward the ceiling as the top thighs descend.',
    'Fold two or more firm blankets into rectangles measuring about 1 foot by 2 feet, and stack them one on top of the other. You can place a sticky mat over the blankets to help the upper arms stay in place while in the pose. Then lie on the blankets with your shoulders supported (and parallel to one of the longer edges) and your head on the floor. Lay your arms on the floor alongside your torso, then bend your knees and set your feet against the floor with the heels close to the sitting bones. Exhale, press your arms against the floor, and push your feet away from the floor, drawing your thighs into the front torso.',
    'In Savasana it is essential that the body be placed in a neutral position. Sit on the floor with your knees bent, feet on the floor, and lean back onto your forearms. Lift your pelvis slightly off the floor and, with your hands, push the back of the pelvis toward the tailbone, then return the pelvis to the floor. Inhale and slowly extend the right leg, then the left, pushing through the heels. Release both legs, softening the groins, and see that the legs are angled evenly relative to the mid-line of the torso, and that the feet turn out equally. Narrow the front pelvis and soften (but do not flatten) the lower back.',
  ]);

  let myOnclickk = function() {
    if (index + 1 === imageArray.length) {
      setIndex((index = imageArray.length - 1));
      setCount(count);
    } else {
      setIndex(index + 1);
      setInstructionsArray(instructionsArray);
      setCount(count - 2);
    }
  };

  let myOnclickkBack = function() {
    if (index === 0) {
      setIndex((index = 0));
    } else {
      setIndex(index - 1);
      setInstructionsArray(instructionsArray);
      setCount(count + 2);
    }
  };

  return (
    <div className="container">
      <div className="col">
        <div className="counter">
          <span className="counter-value"> {count} </span>
          <h5>minutes</h5>
        </div>
        <div className="row justify-content-center ">
          <div className="wrapper">
            <img
              alt=""
              id="instructionsBtn"
              onClick={() => myOnclickk()}
              className=" image "
              src={`../images/${imageArray[index]}.png`}
            ></img>
            <span id="instructions" className="popup" onClick={() => popUp()}>
              <button className="btnInstructions">Instructions ON/OFF</button>
            </span>
            <span>
              <img alt="" id="logoImg" src="images/logo.png"></img>
            </span>
          </div>
        </div>
        <div className="row justify-content-center ">
          <p className="justify-content-center text">{textArray[index]}</p>
        </div>
        <div className="row justify-content-center ">
          <span className="myButton" onClick={() => myOnclickkBack()}>
            back
          </span>
          <Link to="/">
            <div className="myButton">home</div>
          </Link>

          <span className="myButton" onClick={() => myOnclickk()}>
            next
          </span>
        </div>
        <div className="popup row justify-content-center ">
          <span className="popuptext " id="myPopup">
            <p>{instructionsArray[index]}</p>
          </span>
        </div>
      </div>
    </div>
  );
}
