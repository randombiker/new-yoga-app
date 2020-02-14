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
    'img9',
    'img10',
    'img11',
    'img12',
    'img13',
    'img14',
    'img16',
    'img18',
    'img19',
    'img22',
    'img23',
    'img26',
    'img31',
  ]);
  let [textArray] = useState([
    'Tadasana - Mountain pose',
    'Uttanasana - Forward bending',
    'Trikonasana - Triangle pose',
    'Virabhadra - Warrior I pose',
    'Virabhadrasana - Warrior III pose',
    'Utkatasana - Chair pose',
    'Adho Mukha Svanasana - Downwoard dog',
    'Bhujangasana - Cobra pose',
    'Setu Bandha Sarvangasana - Bridge pose',
    'Balasana - Child pose',
    'Navasana - Boat pose',
    'Phalakasana - Plank pose',
    'Marichyasana - Sage Marichy pose',
    'Paschimottanasana - Forward bending',
    'Salamba Sarvangasana - Shoulder stand',
    'Savasana - Corps pose',
  ]);

  let [instructionsArray, setInstructionsArray] = useState([
    'Tadasana - Stand erect with the feet together, the heels and big toes touching each other. Tighten the knees and pull the knee-caps up, contract the hips and pull up the muscles at the back of the thighs. Keep the stomach in, chest forward, spine stretched up and the neck straight. Do not bear the weight of the body either on the heels or the toes, but distribute it evenly on them both. Ideally in Tarla^ana the arms are stretched oul over the head, but for the sake of convenience, one can place them by the sidf* of the thighs. Each of the standing poses described below can then be followed easily, starting with the pupil standing in Tadasana with palms by the side of the thighs.',
    'Uttanasana - Stand in Tadasana, keeping the knees tight. Exhale, bend forward and place the fingers on the floor. Then place the palms on the floor by the side of the feet, behind the heels. Do not bend the legs at the knees.  Try to hold the head up and stretch the spine. Move the hips a little forward towards the head so as to bring the legs perpendicular to the floor. Remain in this position and take two deep breaths. Exhale, move the trunk closer to the legs and rest the head on the knees. Do not slacken the grip at the knees, but pull the knee-caps well up. Hold this position for a minute with deep and even breathing. Inhale and raise the head from the knees, but without lifting the palms from the floor. After two breaths, take a deep inhalation, lift the hands from the floor and come back to Tadasana,',
    'Utthita trikonasana - Stand in Tadasana. Inhale deeply and with a jump spread apart the legs sideways 3 to 4 feet. Raise the arms sideways, in line with the shoulders, palms facing down. Keep the arms parallel to the floor. Turn the right foot sideways go degrees to the right. Turn the left foot slightly to the right, keeping the left leg stretched out and tightened at the knee. Exhale, bend the trunk sideways to the right, bringing the right palm near the right ankle. If possible, the right palm should rest completely on the floor. Stretch the left arm up bringing it in line with the right shoulder and extend the trunk. The back of the legs, the back of the chest and the hips should be in a line with the thumb of the outstretched left hand. Keep the right knee locked tight by pulling up the knee-cap and keep the right knee facing the toes. Remain in this position from half a minute to a minute, breathing.',

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
