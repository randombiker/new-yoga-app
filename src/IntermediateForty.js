import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import popUp from './Popup.js';

export default function IntermediateForty() {
  let [index, setIndex] = useState(0);
  let [count, setCount] = useState(17);
  let [imageArray] = useState([
    'img1',
    'img2',
    'img3',
    'img4',
    'img5',
    'img10',
    'img11',
    'img12',
    'img13',
    'img15',
    'img16',
    'img18',
    'img19',
    'img22',
    'img23',
    'img27',
    'img31',
  ]);
  let [textArray] = useState([
    'Tadasana - Mountain pose',
    'Uttanasana - Forward bending',
    'Utthita trikonasana - Triangle pose',
    'Parivrtta trikonasana - Revolved triangle pose',
    'Utthita Parsvakonasana - Extended side angle',
    'Virabhadrasana - Warrior III pose',
    'Utkatasana - Chair pose',
    'Adho Mukha Svanasana - Downwoard dog',
    'Bhujangasana - Cobra pose',
    'Urdhva Dhanurasana - Wheel pose',
    'Balasana -  Child pose',
    'Navasana - Boat pose',
    'Phalakasana - Plank pose',
    'Marichyasana - Sage Marichy pose',
    'Paschimottanasana - Forward bending',
    'Salamba Sirsasana - Suported head stand',
    'Savasana - Corps pose',
  ]);

  let [instructionsArray, setInstructionsArray] = useState([
    'Tadasana - Stand erect with the feet together, the heels and big toes touching each other. Tighten the knees and pull the knee-caps up, contract the hips and pull up the muscles at the back of the thighs. Keep the stomach in, chest forward, spine stretched up and the neck straight. Do not bear the weight of the body either on the heels or the toes, but distribute it evenly on them both. Ideally in Tadasana the arms are stretched out over the head, but for the sake of convenience, one can place them by the side of the thighs. ',
    'Uttanasana - Stand in Tadasana, keeping the knees tight. Exhale, bend forward and place the fingers on the floor. Then place the palms on the floor by the side of the feet, behind the heels. Do not bend the legs at the knees.  Try to hold the head up and stretch the spine. Move the hips a little forward towards the head so as to bring the legs perpendicular to the floor. Remain in this position and take two deep breaths. Exhale, move the trunk closer to the legs and rest the head on the knees. Do not slacken the grip at the knees, but pull the knee-caps well up. Hold this position for a minute with deep and even breathing. Inhale and raise the head from the knees, but without lifting the palms from the floor. After two breaths, take a deep inhalation, lift the hands from the floor and come back to Tadasana.',
    'Utthita trikonasana - Stand in Tadasana. Inhale deeply and with a jump spread apart the legs sideways 3 to 4 feet. Raise the arms sideways, in line with the shoulders, palms facing down. Keep the arms parallel to the floor. Turn the right foot sideways 90 degrees to the right. Turn the left foot slightly to the right, keeping the left leg stretched out and tightened at the knee. Exhale, bend the trunk sideways to the right, bringing the right palm near the right ankle. If possible, the right palm should rest completely on the floor. Stretch the left arm up bringing it in line with the right shoulder and extend the trunk. The back of the legs, the back of the chest and the hips should be in a line with the thumb of the outstretched left hand. Keep the right knee locked tight by pulling up the knee-cap and keep the right knee facing the toes. Remain in this position from half a minute to a minute, breathing.',
    'Parivrtta trikonasana - Stand in Tadasana. Take a deep inhalation and with a jump spread the legs apart sideways 3 to 4 feet. Raise the arms sideways, in line with the shoulders, palms facing down. Turn the right foot sideways 90 degrees to the right. Turn the left foot 60 degrees to the right, keeping the left leg stretched out and tightened at the knee. Exhale, rotate the trunk in the opposite direction (to the right) so as to bring the left palm on the floor near the outer side of the right foot. Stretch the right arm up bringing it in line with the left arm. Gaze at the right thumb. Keep the knees tight. Do not lift the toes of the right foot from the floor. Remember to rest the outer side of the left foot well on the floor. Stretch both the shoulders and shoulder blades. Stay in this pose for half a minute with normal breathing. Inhale, lift the left hand from the floor, rotate the trunk back to its original position and come back to the initial position. Exhale, repeat the pose on the left side by turning the left foot sideways 90 degrees to the left and the right foot 60 degrees to the left and place the right palm on the floor near the outer side of the left foot.',
    'Utthita Parsvakonasana - Stand with your feet about 4–5 ft apart. Turn your left leg out by 90 degrees and slightly turn in the toes of your right foot. On an in-breath lift your arms to shoulder height. On an out-breath bend your left knee and go into a deep lunge. Your knee should be directly over your ankle, making your shin vertical. If your hips are tight, you may find that your left knee slides forward. If so, gently pull it back into line. This will encourage your hips to open. On an out-breath extend your upper body to the left (don’t fold forward). Place your left hand on the floor or on a block behind your foot. Extend your right arm over your head. Look up at your right palm. Repeat on the other side. Instead of putting your hand on the ground, you can place your elbow on your thigh.',
    'Virabhadrasana III - Stand in Tadasana. Raise both arms above the head; stretch up and join the palms. Take a deep inhalation and with a jump spread the legs apart sideways 4 to 4.5 feet. Exhale, turn to the right. Simultaneously turn the tight foot 90 degrees to the right and the left foot slightly to the right. Flex the right knee till the right thigh is parallel to the floor and the right shin perpendicular to the floor, forming a right angle  between the right thigh and the right calf. The bent knee should not extend beyond the ankle, but should be in line with the heel. Stretch out the left leg and tighten at the knee. The face, chest and right knee should face the same way as the right foot, as illustrated. Throw the head up, stretch the spine and gaze at the joined palms. Hold the pose from 20 seconds to half a minute with normal breathing.',
    'Utkatasana - Stand in Tadasana, stretch the arms straight over the head and join the palms, Exhale, bend the knees and lower the trunk till the thighs are parallel to the floor. Do not stoop forward, but keep the chest as far back as possible and breathe normally. Stay in the pose for a few seconds, 30 being sufficient, It is difficult to balance in this pose. Inhale, straighten the legs, lower the arms, come back to Tadasana and relax.',
    'Adho Mukha Svanasana - Lie full length on the floor on the stomach, face downwards. The feet should be kept one foot apart. Rest the palms by the side of the shoulder, the fingers straight and pointing in the direction of the head. Exhale and raise the trunk from the floor. Straighten the arms, move the head inwards towards the feet and place the crown of the head on the floor, keeping the elbows straight and extending the back. Keep the legs stiff and do not bend at the knees. The soles of the feet should rest completely on the floor, while the feet should be parallel to each other, the toes pointing straight ahead. Stay in the pose for about a minute with deep breathing. Then with an exhalation lift the head off the floor, stretch the trunk forward and lower the body gently to the floor and relax.',
    'Bhujangasana - Lie flat on the floor on the stomach. Bend the elbows and place the palms on the floor on either side of the waist. Exhale, lift the head and trunk up and back, by stretching the arms fully, without moving the pubic region and the legs. Remain in this position breathing normally for a few seconds.',
    'Urdhva Dhanurasana - Lie on your back with your knees bent and your feet hip-width apart. Move into bridge pose. It helps to open your chest as fully as you can . Try bringing your hands to the back of your lower ribs and lifting your chest as fully as possible. Keep your knees parallel. Bring your hands to the ground beside your head. Your fingertips should face your shoulders and your elbows should point straight upward – don’t let them flop sideways. Try to keep your thumbs in contact with the ground. Keep your hips lifted. Breathe in and lift your body up by pressing down into your hands and feet, and forward through your thighs. Once fully in the posture you can rock forward and backward (toward your toes and then your nose) a few times to open your chest. Return to the ground gently and lie flat for a few moments. Rest in child pose If you find step three difficult, remain in step 2 but push up so that the top of your head rests on the floor for a few seconds. don’t take much weight on your head. ',
    'Balasana - Kneel with your knees and ankles close together (don’t sit back on your heels yet). On an in-breath, lift your arms gently above your head and feel your whole back lengthen. Keep your neck and low back long and loose. Breathe steadily. On an out-breath, sit back on your heels and gently fold forward. Lower your forehead to the floor and rest your hands alongside your feet, palms facing upward. Breathe softly and steadily. Relax the muscles in your neck, shoulders and chest. If you find kneeling uncomfortable, try placing a rolled up mat or blanket under your ankles to take the pressure off the tops of your feet. You can place a block between your hips and heels if your knees feel tight, or rest your forehead on a block if your head does not easily reach the floor. Observe your breathing through the movement of your diaphragm pressed against your thighs.',
    'Navasana - Sit on the floor with your legs straight in front of you. Press your hands on the floor a little behind your hips, fingers pointing toward the feet, and strengthen the arms. Lift through the top of the sternum and lean back slightly. As you do this make sure your back does not round; continue to lengthen the front of your torso between the pubis and top sternum. Sit on the "tripod" of your two sitting bones and tailbone. Exhale and bend your knees, then lift your feet off the floor, so that the thighs are angled about 45-50 degrees relative to the floor. Lengthen your tailbone into the floor and lift your pubis toward your navel. If possible, slowly straighten your knees, raising the tips of your toes slightly above the level of your eyes. If this is not possible remain with your knees bent, perhaps lifting the shins parallel to the floor. Stretch your arms alongside the legs, parallel to each other and the floor. Spread the shoulder blades across your back and reach strongly out through the fingers. If this is not possible, keep the hands on the floor beside your hips or hold on to the backs of your thighs. While the lower belly should be firm, it should not get hard and thick. Try to keep the lower belly relatively flat. Press the heads of the thigh bones toward the floor to help anchor the pose and lift the top sternum. Breathe easily. Tip the chin slightly toward the sternum so the base of the skull lifts lightly away from the back of the neck.',
    'Phalakasana - Start in downward-facing dog, then inhale and draw your torso forward until the arms are perpendicular to the floor and the shoulders directly over the wrists, torso parallel to the floor. Press your outer arms inward and firm the bases of your index fingers into the floor. Firm your shoulder blades against your back, then spread them away from the spine. Also spread your collarbones away from the sternum. Press your front thighs up toward the ceiling, but resist your tailbone toward the floor as you lengthen it toward the heels. Lift the base of the skull away from the back of the neck and look straight down at the floor, keeping the throat and eyes soft. Plank Pose is one of the positions in the traditional Sun Salutation sequence. You can also perform this pose by itself and stay anywhere from 30 seconds to 1 minute.',
    'Marichyasana - Sit in Dandanasa (Staff pose), then bend your right knee and put the foot on the floor, with the heel as close to the right sitting bone as possible. Keep the left leg strong and rotated slightly inward; ground the head of the thigh bone into the floor. Press the back of the left heel and the base of the big toe away from the pelvis. Also press the inner right foot actively into the floor, but soften the inner right groin to receive the pubis as you twist. Grounding the straight-leg thigh and bent-knee foot will help you lengthen your spine, which is always the first prerequisite of a successful twist. With an exhalation, rotate your torso to the right and wrap your left arm around the right thigh. Hold the outer thigh with your left hand, then pull the thigh up as you release the right hip toward the floor. Press your right fingertips onto the floor just behind your pelvis to lift the torso slightly up and forward. Remember to keep your straight leg and bent-knee foot grounded. Sink the inner right groin deeper into the pelvis, then lengthen your front belly up out of the groin along the inner right thigh. Continue lengthening the spine with each inhalation, and twist a little more with each exhalation. Hug the thigh to your belly, then lean back against your shoulder blades into an upper-back backbend. Gently turn your head to the right to complete the twist in your cervical spine.',
    'Paschimottanasana - Unless you are very flexible, sit on a block to make the pose much easier. Alternatively, bend your knees, hold the soles of your feet and bring your chest to your thighs – now gradually extend your legs. Another modification is to practice with straight legs while holding onto a belt that is looped around your feet. Fold forward from your hips on an out-breath. Extend the spine as far as you can (don’t lead with your chin). Rest your hands on your legs. Align your head and spine. Keep your chest area open. Gently clasp your toes, ankles or whichever part of your legs you can reach. On an in-breath, lift your body and your abdominal and pelvic floor muscles and lengthen your spine. On your next out-breath fold softly forward, bending your elbows outward and keeping your neck and shoulders relaxed. Repeat for several breaths.',
    'Salamba Sirsasana - Spread a blanket four-fold on the floor and kneel near it. Rest the forearms on the centre of the blanket. While doing so take care that the distance between the elbows on the floor is not wider than the shoulders.  Interlock the fingers right up to the finger-lips, so that the palms form a cup. Place the sides of the palms near the little fingers on the blanket. While going up onto your head or balancing, the fingers should be kept tightly locked. If they are left loose, the weight of the body falls on them and the arms ache. So remember to lock them well. Rest the crown of the head only on the blanket, so that the back of the head touches the palms which are cupped. Do not rest the forehead nor the back but only the crown of the head on the blanket. To do this move the knees towards the head. After securing the head position, raise the knees from the floor by moving the toes closer to the head. Exhale, take a gentle swing from the floor and lift the legs off the ground with bent knees. Take the swing in such a way that both feet leave the floor simultaneously. Stretch the legs and stand on the head keeping the whole body perpendicular to the floor.',
    'Savasana - Lie flat on the back full length like a corpse. Keep the hands a little away from the thighs, with the palms up. Close the eyes. If possible place a black cloth folded four times over the eyes. Keep the heels together and the toes apart. To start with breathe deeply. Later the breathing should be fine and slow, with no jerky movements to disturb the spine or the body. Concentrate on deep and fine exhalations, in which the nostrils do not feel the warmth of breath. The lower jaw should hang loose and not be clenched. The tongue should not be disturbed, and even the pupils of the eyes should be kept completely passive. Relax completely and breathe out slowly.  If the mind wanders, pause without any strain after each slow exhalation. ',
  ]);

  let myOnclickk = function() {
    if (index + 1 === imageArray.length) {
      setIndex((index = imageArray.length - 1));
      setCount(count);
    } else {
      setIndex(index + 1);
      setInstructionsArray(instructionsArray);
      setCount(count - 1);
    }
  };

  let myOnclickkBack = function() {
    if (index === 0) {
      setIndex((index = 0));
    } else {
      setIndex(index - 1);
      setInstructionsArray(instructionsArray);
      setCount(count + 1);
    }
  };

  return (
    <div className="container">
      <div className="col">
        <div className="counter">
          <span className="counter-value"> {count} </span>
          <h5>postures</h5>
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
          <span className="myButton btn" onClick={() => myOnclickkBack()}>
            back
          </span>
          <Link to="/Main">
            <div className="myButton btn">home</div>
          </Link>

          <span className="myButton btn" onClick={() => myOnclickk()}>
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
