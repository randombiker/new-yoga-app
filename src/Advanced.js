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
    'Utthita Parsvakonasana - Extended side angle',
    'Prasarita Padottanasana - Wide leg forward pose',
    'Parsvottanasana - Side stretch pose',
    'Utthita Parsva Sahita - Extended sideward Pose',
    'Virabhadrasana I - Warrior I pose',
    'Virabhadrasana III - Warrior III pose',
    'Utkatasana - Chair pose',
    'Adho Mukha Svanasana - Downwoard dog',
    'Bhujangasana - Cobra pose',
    'Setu Bandha Sarvangasana - Bridge pose',
    'Urdhva Dhanurasana - Wheel pose',
    'Balasana - Child pose',
    'Baddha Konasana - Bound angle pose',
    'Navasana - Boat pose',
    'Phalakasana - Plank pose',
    'Purvottanasana - Front extended pose',
    'Bhuja Pidasana - Arm presure pose',
    'Marichyasana - Sage Marichy pose',
    'Paschimottanasana - Forward bending',
    'Baddha Konasana II - Bound angle pose II',
    'Upavistha Konasana - Seated angle pose',
    'Sarvangasana - Shoulder stand',
    'Salamba Sirsasana - Suported head stand',
    'Halasana - Plow pose',
    'Karna Pidasana - Ear pressure pose',
    'Padmasana - Lotus pose',
    'Savasana - Corps pose',
  ]);

  let [instructionsArray] = useState([
    'Tadasana - Stand erect with the feet together, the heels and big toes touching each other. Tighten the knees and pull the knee-caps up, contract the hips and pull up the muscles at the back of the thighs. Keep the stomach in, chest forward, spine stretched up and the neck straight. Do not bear the weight of the body either on the heels or the toes, but distribute it evenly on them both. Ideally in Tarla^ana the arms are stretched oul over the head, but for the sake of convenience, one can place them by the sidf* of the thighs. Each of the standing poses described below can then be followed easily, starting with the pupil standing in Tadasana with palms by the side of the thighs.',
    'Uttanasana - Stand in Tadasana, keeping the knees tight. Exhale, bend forward and place the fingers on the floor. Then place the palms on the floor by the side of the feet, behind the heels. Do not bend the legs at the knees.  Try to hold the head up and stretch the spine. Move the hips a little forward towards the head so as to bring the legs perpendicular to the floor. Remain in this position and take two deep breaths. Exhale, move the trunk closer to the legs and rest the head on the knees. Do not slacken the grip at the knees, but pull the knee-caps well up. Hold this position for a minute with deep and even breathing. Inhale and raise the head from the knees, but without lifting the palms from the floor. After two breaths, take a deep inhalation, lift the hands from the floor and come back to Tadasana,',
    'Utthita trikonasana - Stand in Tadasana. Inhale deeply and with a jump spread apart the legs sideways 3 to 4 feet. Raise the arms sideways, in line with the shoulders, palms facing down. Keep the arms parallel to the floor. Turn the right foot sideways go degrees to the right. Turn the left foot slightly to the right, keeping the left leg stretched out and tightened at the knee. Exhale, bend the trunk sideways to the right, bringing the right palm near the right ankle. If possible, the right palm should rest completely on the floor. Stretch the left arm up bringing it in line with the right shoulder and extend the trunk. The back of the legs, the back of the chest and the hips should be in a line with the thumb of the outstretched left hand. Keep the right knee locked tight by pulling up the knee-cap and keep the right knee facing the toes. Remain in this position from half a minute to a minute, breathing.',
    'Parivrtta trikonasana - Stand in Tadasana. Take a deep inhalation and with a jump spread the legs apart sideways 3 to 4 feet. Raise the arms sideways, in line with the shoulders, palms facing down. Turn the right foot sideways 90 degrees to the right. Turn the left foot 60 degrees to the right, keeping the left leg stretched out and tightened at the knee. Exhale, rotate the trunk in the opposite direction (to the right) so as to bring the left palm on the floor near the outer side of the right foot. Stretch the right arm up bringing it in line with the left arm. Gaze at the right thumb. Keep the knees tight. Do not lift the toes of the right foot from the floor. Remember to rest the outer side of the left foot well on the floor. Stretch both the shoulders and shoulder blades. Stay in this pose for half a minute with normal breathing. Inhale, lift the left hand from the floor, rotate the trunk back to its original position and come back to position i. Exhale, repeat the pose on the left side by turning the left foot sideways 90 degrees to the left and the right foot 60 degrees to the left and place the right palm on the floor near the outer side of the left foot',
    'Utthita Parsvakonasana - Extended side angle',
    'Prasarita Padottanasana - Stand in Tadasana. Inhale, place the hands on the waist and spread the legs apart 4.5 to 5 feet, Tighten the legs by drawing up the knee caps. Exhale, and place the palms on the floor in line with the shoulders between the feet. Inhale and raise the head up, keeping the back concave. Exhale, bend the elbows and rest the crown of the head on the floor, keeping the weight of the body on the legs. Do not throw the body weight on the head. Both feet, both palms and the head should be in a straight line. ',
    'Parsvottanasana - Side stretch pose',
    'Utthita Parsva Sahita - Extended sideward Pose',
    'Virabhadrasana I - Take a deep inhalation, and with a jump spread the legs apart sideways 4 to 4.5  feet. Raise the arms sideways in line with the shoulders, palms facing down. Turn the right foot sideways 90 degrees to the right and the left foot slightly to the right, keeping the left leg stretched out and tightened at the knee. Stretch the hamstring muscles of the left leg. Exhale and bend the right knee till the right thigh is parallel to the floor, keeping the right shin perpendicular to the floor, thus forming a right angle between the right thigh and the right calf. The bent knee should not extend beyond the ankle, but should be in line with the heel. Stretch out the hands sideways, as though two persons are pulling you from opposite ends. Turn the face to the right and gaze at the right palm. Stretch the back muscles of the left leg fully. The back of the legs, the dorsal region and the hips should be in one line.',
    'Virabhadrasana III - Stand in Tadasana. Raise both arms above the head; stretch up and join the palms. Take a deep inhalation and with a jump spread the legs apart sideways 4 to 4.5 feet. Exhale, turn to the right. Simultaneously turn the tight foot 90 degrees to the right and the left foot slightly to the right. Flex the right knee till the right thigh is parallel to the floor and the right shin perpendicular to the floor, forming a right angle  between the right thigh and the right calf. The bent knee should not extend beyond the ankle, but should be in line with the heel. Stretch out the left leg and tighten at the knee. The face, chest and right knee should face the same way as the right foot, as illustrated. Throw the head up, stretch the spine and gaze at the joined palms. Hold the pose from 20 seconds to half a minute with normal breathing.',
    'Utkatasana - Stand in Tadasana, stretch the arms straight over the head and join the palms, Exhale, bend the knees and lower the trunk till the thighs are parallel to the floor. Do not stoop forward, but keep the chest as far back as possible and breathe normally. Stay in the pose for a few seconds, 30 being sufficient, It is difficult to balance in this pose. Inhale, straighten the legs (Plate 12), lower the arms, come back to Tadasana and relax.',
    'Adho Mukha Svanasana - Lie full length on the floor on the stomach, face downwards. The feet should be kept one foot apart. Rest the palms by the side of the shoulder, the fingers straight and pointing in the direction of the head. Exhale and raise the trunk from the floor. Straighten the arms, move the head inwards towards the feet and place the crown of the head on the floor, keeping the elbows straight and extending the back. Keep the legs stiff and do not bend at the knees. The soles of the feet should rest completely on the floor, while the feet should be parallel to each other, the toes pointing straight ahead. Stay in the pose for about a minute with deep breathing. Then with an exhalation lift the head off the floor, stretch the trunk forward and lower the body gently to the floor and relax.',
    'Bhujangasana - Lie flat on the floor on the stomach. Bend the elbows and place the palms on the floor on either side of the waist. Exhale, lift the head and trunk up and back, by stretching the arms fully, without moving the pubic region and the legs. Remain in this position breathing normally for a few seconds.',
    'Setu Bandha Sarvangasana - Lie flat on the back on the floor. Take a few deep breaths. Bend the knees, widen the legs at the knees and bring the heels in towards the buttocks. Keep the heels together and rest the outer sides firmly on the floor. Bring the hands by the side of the head and, with an exhalation, raise the trunk and arch the body up to rest the crown of the head on the floor. Pull the head as far back as possible by stretching the neck up and lifting the dorsal and lumbar regions of the back off the floor. Hold this position for a few seconds with normal breathing. ',
    'Urdhva Dhanurasana - Wheel pose',
    'Balasana - Child pose',
    'Baddha Konasana - Bound angle pose',
    'Navasana - Boat pose',
    'Phalakasana - Plank pose',
    'Purvottanasana - Front extended pose',
    'Bhuja Pidasana - Arm presure pose',
    'Marichyasana - Sage Marichy pose',
    'Paschimottanasana - Forward bending',
    'Baddha Konasana II - Bound angle pose II',
    'Upavistha Konasana - Seated angle pose',
    'Sarvangasana - Shoulder stand',
    'Salamba Sirsasana - Spread a blanket four-fold on the floor and kneel near it. Rest the forearms on the centre of the blanket. While doing so take care that the distance between the elbows on the floor is not wider than the shoulders.  Interlock the fingers right up to the finger-lips, so that the palms form a cup. Place the sides of the palms near the little fingers on the blanket. While going up onto your head or balancing, the fingers should be kept tightly locked. If they are left loose, the weight of the body falls on them and the arms ache. So remember to lock them well. Rest the crown of the head only on the blanket, so that the back of the head touches the palms which are cupped. Do not rest the forehead nor the back but only the crown of the head on the blanket. To do this move the knees towards the head. After securing the head position, raise the knees from the floor by moving the toes closer to the head. Exhale, take a gentle swing from the floor and lift the legs off the ground with bent knees. Take the swing in such a way that both feet leave the floor simultaneously. Stretch the legs and stand on the head keeping the whole body perpendicular to the floor.',
    'Halasana - Do Salamba Sarvangasana (Shoulder stand) with a firm chinlock. Release the chinlock, lower the trunk slightly, moving the arms and legs over the head and resting the toes on the floor. Tighten the knees by pulling up the hamstring muscles at the back of the thighs and raise the trunk. Place the hands in the middle of the back and press it to keep the trunk perpendicular to the floor. Stretch the arms on the floor in the direction opposite to that of the legs. Hook the thumbs and stretch the arms and legs. Interlock the fingers and turn the wrists so that the thumbs rest on the floor. Stretch the palms along with the fingers, tighten the arms at the elbows and pull them from the shoulders. The legs and the hands are stretched in opposite directions and this stretches the spine completely.',
    'Karna Pidasana - Do Halasana and after completing the time limit for that pose, flex the knees and rest the right knee by the side of the  right ear and the left knee by the side of the left. Both knees should rest on the floor, pressing the ears. Keep the toes stretched out and join the heels and toes. Rest the hands either on the back of the ribs (Plate 245) or interlock the fingers and stretch out the arms as in Halasana. Remain in this position for half a minute or a minute with normal breathing. ',
    'Padmasana - Sit on the floor with the legs straight. Bend the right leg at the knee, hold the right foot with the hands and place it at the root of the left thigh so that the right heel is near the navel. Now bend the loft leg, and holding the left foot with the hands place it over the right at the root, the heel being near the navel. The soles of the feet should be turned up.  From the base to the neck the spine should remain erect. The arms may be stretched out, the right hand being placed on the right knee and the left hand on the left knee. The forefingers and the thumbs are bent and touch each other. Another way of placing the hands is in the middle where the feet cross each other with one palm upon the other. Change the leg position by placing the left foot over the right thigh and the right foot over the left thigh. This will develop the legs evenly. ',
    'Savasana - Lie flat on the back full length like a corpse. Keep the hands a little away from the thighs, with the palms up. Close the eyes. If possible place a black cloth folded four times over the eyes. Keep the heels together and the toes apart. To start with breathe deeply. Later the breathing should be fine and slow, with no jerky movements to disturb the spine or the body. Concentrate on deep and fine exhalations, in which the nostrils do not feel the warmth of breath. The lower jaw should hang loose and not be clenched. The tongue should not be disturbed, and even the pupils of the eyes should be kept completely passive. Relax completely and breathe out slowly.  If the mind wanders, pause without any strain after each slow exhalation. ',
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

  let myOnclickk = function() {
    index = index - 1;
    if (postures[0] === undefined) {
      return alert('you need to chose your postures first');
    } else if (index + 1 === postures[postures.length - 1]) {
      setIndex((index = postures[postures.length - 1]));
    } else {
      document.getElementById('controlGroup').style.display = 'none';
      document.getElementById('personalized').style.display = 'block';
      document.getElementById('containerAdvanced').style.display = 'block';
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
                  id="Parsvakonasana"
                  value="img5"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img6.png"></img>
                <input
                  type="checkbox"
                  id="Padottanasana"
                  value="img6"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img7.png"></img>
                <input
                  type="checkbox"
                  id="Parsvottanasana"
                  value="img7"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img8.png"></img>
                <input
                  type="checkbox"
                  id="Utthita Parsva Sahita"
                  value="img8"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img9.png"></img>
                <input
                  type="checkbox"
                  id="Virabhadrasana II"
                  value="img9"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img10.png"></img>
                <input
                  type="checkbox"
                  id="Virabhadrasana III"
                  value="img10"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img11.png"></img>
                <input
                  type="checkbox"
                  id="Utkatasana "
                  value="img11"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img12.png"></img>
                <input
                  type="checkbox"
                  id="Adho Mukha Svanasana "
                  value="img12"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img13.png"></img>
                <input
                  type="checkbox"
                  id="Bhujangasana"
                  value="img13"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img14.png"></img>
                <input
                  type="checkbox"
                  id="Setu Bandha Sarvangasana"
                  value="img14"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img15.png"></img>
                <input
                  type="checkbox"
                  id="Urdhva Dhanurasana"
                  value="img15"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img16.png"></img>
                <input
                  type="checkbox"
                  id="Balasana"
                  value="img16"
                  onClick={() => handleClick()}
                />
              </label>
            </div>
            <div className="col">
              <label>
                <img className="myIcons" alt="" src="images/img17.png"></img>
                <input
                  type="checkbox"
                  id="Baddha Konasana"
                  value="img17"
                  onClick={() => handleClick()}
                />
              </label>

              <label>
                <img className="myIcons" alt="" src="images/img18.png"></img>
                <input
                  type="checkbox"
                  id="Navasana"
                  value="img18"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img19.png"></img>
                <input
                  type="checkbox"
                  id="Phalakasana"
                  value="img19"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img20.png"></img>
                <input
                  type="checkbox"
                  id="Purvottanasana"
                  value="img20"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img21.png"></img>
                <input
                  type="checkbox"
                  id="Bhuja Pidasana"
                  value="img21"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img22.png"></img>
                <input
                  type="checkbox"
                  id="Marichyasana"
                  onClick={() => handleClick()}
                  value="img22"
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img23.png"></img>
                <input
                  type="checkbox"
                  id="Paschimottanasana"
                  value="img23"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img24.png"></img>
                <input
                  type="checkbox"
                  id="Baddha Konasana II "
                  value="img24"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img25.png"></img>
                <input
                  type="checkbox"
                  id="Upavistha Konasana "
                  value="img25"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img26.png"></img>
                <input
                  type="checkbox"
                  id="Sarvangasana"
                  onClick={() => handleClick()}
                  value="img26"
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img27.png"></img>
                <input
                  type="checkbox"
                  id="Salamba Sirsasana"
                  value="img27"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img28.png"></img>
                <input
                  type="checkbox"
                  id="Halasana "
                  value="img28"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img29.png"></img>
                <input
                  type="checkbox"
                  id="Karna Pidasana "
                  value="img29"
                  onClick={() => handleClick()}
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img30.png"></img>
                <input
                  type="checkbox"
                  id="Padmasana"
                  onClick={() => handleClick()}
                  value="img30"
                />
              </label>
              <label>
                <img className="myIcons" alt="" src="images/img31.png"></img>
                <input
                  type="checkbox"
                  id="Savasana"
                  value="img31"
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
              <span className="myButton " onClick={() => myOnclickkBack()}>
                back
              </span>
              <Link to="/">
                <div className="myButton ">home</div>
              </Link>

              <span className="myButton " onClick={() => myOnclickkForward()}>
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
