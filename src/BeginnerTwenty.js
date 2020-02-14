import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import popUp from './Popup.js';

export default function BeginnerTwenty() {
  let [index, setIndex] = useState(0);
  let [count, setCount] = useState(24);
  let [imageArray] = useState([
    'img1',
    'img2',
    'img3',
    'img10',
    'img12',
    'img13',
    'img14',
    'img16',
    'img22',
    'img23',
    'img26',
    'img31',
  ]);
  let [textArray] = useState([
    'Tadasana - Mountain pose',
    'Uttanasana - Forward bending',
    'Trikonasana - Triangle pose',
    'Virabhadrasana - Warrior III pose',
    'Adho Mukha Svanasana - Downwoard dog',
    'Bhujangasana - Cobra pose',
    'Setu Bandha Sarvangasana - Bridge pose',
    'Balasana - Child pose',
    'Marichyasana - Sage Marichy pose',
    'Paschimottanasana - Forward bending',
    'Salamba Sarvangasana - Shoulder stand',
    'Savasana - Corps pose',
  ]);

  let [instructionsArray, setInstructionsArray] = useState([
    'Tadasana - Stand erect with the feet together, the heels and big toes touching each other. Tighten the knees and pull the knee-caps up, contract the hips and pull up the muscles at the back of the thighs. Keep the stomach in, chest forward, spine stretched up and the neck straight. Do not bear the weight of the body either on the heels or the toes, but distribute it evenly on them both. Ideally in Tarla^ana the arms are stretched oul over the head, but for the sake of convenience, one can place them by the sidf* of the thighs. Each of the standing poses described below can then be followed easily, starting with the pupil standing in Tadasana with palms by the side of the thighs.',
    'Uttanasana - Stand in Tadasana, keeping the knees tight. Exhale, bend forward and place the fingers on the floor. Then place the palms on the floor by the side of the feet, behind the heels. Do not bend the legs at the knees.  Try to hold the head up and stretch the spine. Move the hips a little forward towards the head so as to bring the legs perpendicular to the floor. Remain in this position and take two deep breaths. Exhale, move the trunk closer to the legs and rest the head on the knees. Do not slacken the grip at the knees, but pull the knee-caps well up. Hold this position for a minute with deep and even breathing. Inhale and raise the head from the knees, but without lifting the palms from the floor. After two breaths, take a deep inhalation, lift the hands from the floor and come back to Tadasana,',
    'Utthita trikonasana - Stand in Tadasana. Inhale deeply and with a jump spread apart the legs sideways 3 to 4 feet. Raise the arms sideways, in line with the shoulders, palms facing down. Keep the arms parallel to the floor. Turn the right foot sideways go degrees to the right. Turn the left foot slightly to the right, keeping the left leg stretched out and tightened at the knee. Exhale, bend the trunk sideways to the right, bringing the right palm near the right ankle. If possible, the right palm should rest completely on the floor. Stretch the left arm up bringing it in line with the right shoulder and extend the trunk. The back of the legs, the back of the chest and the hips should be in a line with the thumb of the outstretched left hand. Keep the right knee locked tight by pulling up the knee-cap and keep the right knee facing the toes. Remain in this position from half a minute to a minute, breathing.',
    'Virabhadrasana III - Stand in Tadasana. Raise both arms above the head; stretch up and join the palms. Take a deep inhalation and with a jump spread the legs apart sideways 4 to 4.5 feet. Exhale, turn to the right. Simultaneously turn the tight foot 90 degrees to the right and the left foot slightly to the right. Flex the right knee till the right thigh is parallel to the floor and the right shin perpendicular to the floor, forming a right angle  between the right thigh and the right calf. The bent knee should not extend beyond the ankle, but should be in line with the heel. Stretch out the left leg and tighten at the knee. The face, chest and right knee should face the same way as the right foot, as illustrated. Throw the head up, stretch the spine and gaze at the joined palms. Hold the pose from 20 seconds to half a minute with normal breathing.',
    'Adho Mukha Svanasana - Lie full length on the floor on the stomach, face downwards. The feet should be kept one foot apart. Rest the palms by the side of the shoulder, the fingers straight and pointing in the direction of the head. Exhale and raise the trunk from the floor. Straighten the arms, move the head inwards towards the feet and place the crown of the head on the floor, keeping the elbows straight and extending the back. Keep the legs stiff and do not bend at the knees. The soles of the feet should rest completely on the floor, while the feet should be parallel to each other, the toes pointing straight ahead. Stay in the pose for about a minute with deep breathing. Then with an exhalation lift the head off the floor, stretch the trunk forward and lower the body gently to the floor and relax.',
    'Bhujangasana - Lie flat on the floor on the stomach. Bend the elbows and place the palms on the floor on either side of the waist. Exhale, lift the head and trunk up and back, by stretching the arms fully, without moving the pubic region and the legs. Remain in this position breathing normally for a few seconds.',
    'Setu Bandha Sarvangasana - Lie flat on the back on the floor. Take a few deep breaths. Bend the knees, widen the legs at the knees and bring the heels in towards the buttocks. Keep the heels together and rest the outer sides firmly on the floor. Bring the hands by the side of the head and, with an exhalation, raise the trunk and arch the body up to rest the crown of the head on the floor. Pull the head as far back as possible by stretching the neck up and lifting the dorsal and lumbar regions of the back off the floor. Hold this position for a few seconds with normal breathing. ',
    'Lie on your back. With an exhale, bend your knees into your belly. Inhale, grip the outsides of your feet with your hands (if you have difficulty holding the feet directly with your hands, hold onto a belt looped over each sole.) Open your knees slightly wider than your torso, then bring them up toward your armpits.',
    'MSit on the floor with your legs straight out in front of you, buttocks supported on a folded blanket. Bend your knees, put your feet on the floor, then slide your left foot under your right leg to the outside of your right hip. Lay the outside of the left leg on the floor. Step the right foot over the left leg and stand it on the floor outside your left hip. The right knee will point directly up at the ceiling.',
    'Sit on the floor with your buttocks supported on a folded blanket and your legs straight in front of you. Press actively through your heels. Rock slightly onto your left buttock, and pull your right sitting bone away from the heel with your right hand. Repeat on the other side. Turn the top thighs in slightly and press them down into the floor. Press through your palms or finger tips on the floor beside your hips and lift the top of the sternum toward the ceiling as the top thighs descend.',
    'Fold two or more firm blankets into rectangles measuring about 1 foot by 2 feet, and stack them one on top of the other. You can place a sticky mat over the blankets to help the upper arms stay in place while in the pose. Then lie on the blankets with your shoulders supported (and parallel to one of the longer edges) and your head on the floor. Lay your arms on the floor alongside your torso, then bend your knees and set your feet against the floor with the heels close to the sitting bones. Exhale, press your arms against the floor, and push your feet away from the floor, drawing your thighs into the front torso.',
    'Savasana - Lie flat on the back full length like a corpse. Keep the hands a little away from the thighs, with the palms up. Close the eyes. If possible place a black cloth folded four times over the eyes. Keep the heels together and the toes apart. To start with breathe deeply. Later the breathing should be fine and slow, with no jerky movements to disturb the spine or the body. Concentrate on deep and fine exhalations, in which the nostrils do not feel the warmth of breath. The lower jaw should hang loose and not be clenched. The tongue should not be disturbed, and even the pupils of the eyes should be kept completely passive. Relax completely and breathe out slowly.  If the mind wanders, pause without any strain after each slow exhalation. ',
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
