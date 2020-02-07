import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import popUp from './Popup.js';

export default function Advanced() {
  let [asanaName] = useState([]);
  let [newAsanaName, setNewAsanaName] = useState([]);
  let [index, setIndex] = useState(0);
  let [postures, setPostures] = useState([]);
  let [count, setCount] = useState(0);
  let [newInstructionsArray, setNewInstructionsArray] = useState([]);
  let [anotherInstructionsArray] = useState([]);
  let [textArray] = useState([
    'Tadasana - Mountain pose',
    'Uttanasana - Forward bending',
    'Utthita trikonasana - Triangle pose',
    'Parivrtta trikonasana - Revolved triangle pose',
    'Virabhadrasana III - Warrior III pose',
    'Natarajasana - Lord of the Dance Pose',
    'Virabhadrasana I - Warrior I pose',
    'Utkatasana - Chair pose',
    'Adho Mukha Svanasana - Downwoard dog',
    'Bhujangasana - Cobra pose',
    'Bridge pose',
    'Urdhva Dhanurasana - Wheel pose',
    'Camel pose',
    'Ananda Balasana - Happy baby pose',
    'Navasana - Boat pose',
    'Phalakasana - Plank pose',
    'Reverse plank',
    'Cow pose',
    'Matsyendrasana - Half Lord of the fishes',
    'Paschimottanasana - Forward bending',
    'Sarvangasana - Shoulder stand',
    'Salamba Sirsasana - Suported head stand',
    'Halasana - Plow pose',
    'Matsyasana - Fish pose',
    'Savasana - Corps pose',
    'Have a nice day',
  ]);

  let [instructionsArray] = useState([
    'Tadasana - Stand erect with the feet together, the heels and big toes touching each other. Tighten the knees and pull the knee-caps up, contract the hips and pull up the muscles at the back of the thighs. Keep the stomach in, chest forward, spine stretched up and the neck straight. Do not bear the weight of the body either on the heels or the toes, but distribute it evenly on them both. Ideally in Tarla^ana the arms are stretched oul over the head, but for the sake of convenience, one can place them by the sidf* of the thighs. Each of the standing poses described below can then be followed easily, starting with the pupil standing in Tadasana with palms by the side of the thighs.',
    'Uttanasana - Stand in Tadasana, keeping the knees tight. Exhale, bend forward and place the fingers on the floor. Then place the palms on the floor by the side of the feet, behind the heels. Do not bend the legs at the knees.  Try to hold the head up and stretch the spine. Move the hips a little forward towards the head so as to bring the legs perpendicular to the floor. Remain in this position and take two deep breaths. Exhale, move the trunk closer to the legs and rest the head on the knees. Do not slacken the grip at the knees, but pull the knee-caps well up. Hold this position for a minute with deep and even breathing. Inhale and raise the head from the knees, but without lifting the palms from the floor. After two breaths, take a deep inhalation, lift the hands from the floor and come back to Tadasana,',
    'Utthita trikonasana - Stand in Tadasana. Inhale deeply and with a jump spread apart the legs sideways 3 to 4 feet. Raise the arms sideways, in line with the shoulders, palms facing down. Keep the arms parallel to the floor. Turn the right foot sideways go degrees to the right. Turn the left foot slightly to the right, keeping the left leg stretched out and tightened at the knee. Exhale, bend the trunk sideways to the right, bringing the right palm near the right ankle. If possible, the right palm should rest completely on the floor. Stretch the left arm up bringing it in line with the right shoulder and extend the trunk. The back of the legs, the back of the chest and the hips should be in a line with the thumb of the outstretched left hand. Keep the right knee locked tight by pulling up the knee-cap and keep the right knee facing the toes. Remain in this position from half a minute to a minute, breathing.',
    'Parivrtta trikonasana - Stand in Tadasana. Take a deep inhalation and with a jump spread the legs apart sideways 3 to 4 feet. Raise the arms sideways, in line with the shoulders, palms facing down. Turn the right foot sideways 90 degrees to the right. Turn the left foot 60 degrees to the right, keeping the left leg stretched out and tightened at the knee. Exhale, rotate the trunk in the opposite direction (to the right) so as to bring the left palm on the floor near the outer side of the right foot. Stretch the right arm up bringing it in line with the left arm. Gaze at the right thumb. Keep the knees tight. Do not lift the toes of the right foot from the floor. Remember to rest the outer side of the left foot well on the floor. Stretch both the shoulders and shoulder blades. Stay in this pose for half a minute with normal breathing. Inhale, lift the left hand from the floor, rotate the trunk back to its original position and come back to position i. Exhale, repeat the pose on the left side by turning the left foot sideways 90 degrees to the left and the right foot 60 degrees to the left and place the right palm on the floor near the outer side of the left foot',
    'Virabhadrasana III - Stand in Tadasana. Take a deep inhalation and with a jump spread the legs apart sideways 4 to 4J feet. Come to the final pose of Virabhadasana I on the right side. Exhale, bend the trunk forward and rest the chest on the right thigh. Keep the arms straight and the palms together. Rest in this position, taking two breaths. Now exhale and simultaneously lift the left leg from the floor by swinging the body slightly forward and also straighten the right leg, making it stiff as a poker. Hold in this pose from 20 to 30 seconds, with deep and even breathing. While balancing, the whole body (except the right leg) is to be kept parallel to the floor. The right leg, which should be fully stretched and stiff, should be kept perpendicular to the floor. Pull the back of the right thigh and stretch the arms and the left leg as if two persons are pulling you from either end.',
    'Natarajasana - ',
    'Virabhadrasana I - Stand in Tadasana. Raise both arms above the head; stretch up and join the palms. Take a deep inhalation and with a jump spread the legs apart sideways 4 to 4.5 feet. Exhale, turn to the right. Simultaneously turn the tight foot 90 degrees to the right and the left foot slightly to the right. (Plate  Flex the right knee till the right thigh is parallel to the floor and the right shin perpendicular to the floor, forming a right angle  between the right thigh and the right calf. The bent knee should not extend beyond the ankle, but should be in line with the heel. Stretch out the left leg and tighten at the knee. The face, chest and right knee should face the same way as the right foot, as illustrated. Throw the head up, stretch the spine and gaze at the joined palms. Hold the pose from 20 seconds to half a minute with normal breathing.',
    'Utkatasana - Stand in Tadasana, stretch the arms straight over the head and join the palms, Exhale, bend the knees and lower the trunk till the thighs are parallel to the floor. Do not stoop forward, but keep the chest as far back as possible and breathe normally. Stay in the pose for a few seconds, 30 being sufficient, It is difficult to balance in this pose. Inhale, straighten the legs (Plate 12), lower the arms, come back to Tadasana and relax.',
    'Adho Mukha Svanasana - Lie full length on the floor on the stomach, face downwards. The feet should be kept one foot apart. Rest the palms by the side of the shoulder, the fingers straight and pointing in the direction of the head. Exhale and raise the trunk from the floor. Straighten the arms, move the head inwards towards the feet and place the crown of the head on the floor, keeping the elbows straight and extending the back. Keep the legs stiff and do not bend at the knees. The soles of the feet should rest completely on the floor, while the feet should be parallel to each other, the toes pointing straight ahead. Stay in the pose for about a minute with deep breathing. Then with an exhalation lift the head off the floor, stretch the trunk forward and lower the body gently to the floor and relax.',

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

  Array.prototype.flatten = function() {
    var ret = [];
    for (var i = 0; i < this.length; i++) {
      if (Array.isArray(this[i])) {
        ret = ret.concat(this[i].flatten());
      } else {
        ret.push(this[i]);
      }
    }
    return ret;
  };

  let handleClick = () => {
    let checked = document.querySelectorAll('input[type="checkbox"]:checked');
    let postureSelection = Array.prototype.map.call(checked, function(obj) {
      return obj.value;
    });

    checked ? setCount(count + 2) : setCount(count);
    postures.push(postureSelection.flatten());
  };

  let postureNumber = postures.flatten().map((x) => x.replace(/^\D+/g, '')); // replace all leading non-digits with nothing
  let uniqset = new Set(postureNumber); //new Set eliminates doublures
  let newPostureNumber = [...uniqset];
  let uniqset1 = new Set(asanaName);
  let uniqset2 = new Set(anotherInstructionsArray);
  newAsanaName = [...uniqset1];
  newInstructionsArray = [...uniqset2];

  newPostureNumber.map((num) => newAsanaName.push(textArray[num - 1]));
  newPostureNumber.map((num) =>
    newInstructionsArray.push(instructionsArray[num - 1])
  );

  console.log(newPostureNumber);
  console.log(newAsanaName);
  console.log(newInstructionsArray);

  let myToggle = function() {
    if (postures[0] === undefined) {
      return;
    } else
      return (
        (document.getElementById('controlGroup').style.display = 'none'),
        (document.getElementById('personalized').style.display = 'block'),
        (document.getElementById('containerAdvanced').style.display = 'block')
      );
  };

  let myOnclickk = function() {
    index = index - 1;
    if (postures[0] === undefined) {
      return alert('you need to chose your postures first');
    } else if (index + 1 === postures[postures.length - 1]) {
      setIndex((index = postures[postures.length - 1]));
    } else {
      setIndex(index + 1);
      setPostures((postures = postures[postures.length - 1]));
      setNewAsanaName((newAsanaName = newAsanaName[newAsanaName.length - 1]));
      setNewInstructionsArray(
        (newInstructionsArray =
          newInstructionsArray[newInstructionsArray.length - 1])
      );
    }
  };

  let myOnclickkForward = function() {
    console.log(postures);
    if (index + 1 === postures.length) {
      setIndex((index = postures.length - 1));
      setCount((count = 0));
    } else {
      setIndex(index + 1);
      setCount(count - 2);
    }
  };

  let myOnclickkBack = function() {
    if (index === 0) {
      setIndex((index = 0));
    } else {
      setIndex(index - 1);
      setCount(count + 2);
    }
  };

  return (
    <>
      <div className="container">
        <div
          className="controlGroup level  namestyle mx-auto"
          id="controlGroup"
        >
          <h5 className="text mx-auto">Build your own routine</h5>

          <div className="counter">
            <span className="counter-value"> {count} </span>
            <h5>minutes</h5>
          </div>

          <div className="row text-left">
            <div className="col">
              <label>
                <img className="myIcons" alt="" src="images/img1.png"></img>
                <input
                  type="checkbox"
                  id="tadasana"
                  value="img1"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img2.png"></img>
                <input
                  type="checkbox"
                  id="uttanasana"
                  value="img2"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img3.png"></img>
                <input
                  type="checkbox"
                  id="trikonasana"
                  value="img3"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img4.png"></img>
                <input
                  type="checkbox"
                  id="Parivrtta trikonasana"
                  value="img4"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img5.png"></img>
                <input
                  type="checkbox"
                  id="VirabhadrasanaIII"
                  value="img5"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img6.png"></img>
                <input
                  type="checkbox"
                  id="Natarajasana"
                  value="img6"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img7.png"></img>
                <input
                  type="checkbox"
                  id="Virabhadrasana"
                  value="img7"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img8.png"></img>
                <input
                  type="checkbox"
                  id="Utkatasana"
                  value="img8"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img9.png"></img>
                <input
                  type="checkbox"
                  id="Adho Mukha Svanasana"
                  value="img9"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img10.png"></img>
                <input
                  type="checkbox"
                  id="trikonasana"
                  value="img10"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img11.png"></img>
                <input
                  type="checkbox"
                  id="Setu Bandha Sarvangasana"
                  value="img11"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img12.png"></img>
                <input
                  type="checkbox"
                  id="Urdhva Dhanurasana "
                  value="img12"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img13.png"></img>
                <input
                  type="checkbox"
                  id="Camel pose"
                  value="img13"
                  onClick={() => handleClick()}
                />
              </label>
            </div>
            <div className="col">
              <label>
                <img className="myIcons" alt="" src="images/img14.png"></img>
                <input
                  type="checkbox"
                  id="Ananda Balasana"
                  value="img14"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img15.png"></img>
                <input
                  type="checkbox"
                  id="Navasana"
                  value="img15"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img16.png"></img>
                <input
                  type="checkbox"
                  id="Phalakasana"
                  value="img16"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img17.png"></img>
                <input
                  type="checkbox"
                  id="reverse plank"
                  value="img17"
                  onClick={() => handleClick()}
                />
              </label>

              <label>
                <img className="myIcons" alt="" src="images/img18.png"></img>
                <input
                  type="checkbox"
                  id="cowpose"
                  value="img18"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img19.png"></img>
                <input
                  type="checkbox"
                  id="Matsyendrasana"
                  value="img19"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img20.png"></img>
                <input
                  type="checkbox"
                  id="Paschimottanasana"
                  value="img20"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img21.png"></img>
                <input
                  type="checkbox"
                  id="Salamba Sarvangasana"
                  value="img21"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img22.png"></img>
                <input
                  type="checkbox"
                  id="Salamba Sirsasana"
                  onClick={() => handleClick()}
                  value="img22"
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img23.png"></img>
                <input
                  type="checkbox"
                  id="Halasana"
                  value="img23"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img24.png"></img>
                <input
                  type="checkbox"
                  id="Matsyasana "
                  value="img24"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img25.png"></img>
                <input
                  type="checkbox"
                  id="Savasana "
                  value="img25"
                  onClick={() => handleClick()}
                />
              </label>
            </div>
          </div>

          <br></br>
          <div className="row justify-content-center ">
            <Link to="/">
              <div className="myButton btn">Back</div>
            </Link>
            <span
              className="myButton btn"
              onClick={() => {
                myOnclickk();
              }}
              onClick={() => {
                myToggle();
              }}
            >
              Set
            </span>
          </div>

          <br></br>
          <br></br>
        </div>
        <div id="containerAdvanced">
          <div className="col " id="personalized">
            <div className="counter  mx-auto">
              <span className="counter-value"> {count} </span>
              <h5>minutes</h5>
            </div>
            <div className="row justify-content-center ">
              <div className="wrapper">
                <div>
                  <img
                    alt=""
                    id="instructionsBtn"
                    className=" image "
                    src={`../images/${postures[index]}.png`}
                  ></img>
                </div>
                <span
                  id="instructions"
                  className="popup"
                  onClick={() => popUp()}
                >
                  <button className="btnInstructions">
                    Instructions ON/OFF
                  </button>
                </span>
                <span>
                  <img alt="" id="logoImg" src="images/logo.png"></img>
                </span>
              </div>
            </div>
            <div className="row justify-content-center ">
              <p className="justify-content-center text">
                {newAsanaName[index]}
              </p>
            </div>
            <div className="row justify-content-center ">
              <span className="myButton btn" onClick={() => myOnclickkBack()}>
                back
              </span>
              <Link to="/">
                <div className="myButton btn">home</div>
              </Link>

              <span
                className="myButton btn"
                onClick={() => myOnclickkForward()}
              >
                next
              </span>
            </div>
            <div className="popup row justify-content-center ">
              <span className="popuptext " id="myPopup">
                <p>{newInstructionsArray[index]}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
