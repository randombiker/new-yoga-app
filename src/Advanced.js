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
    'Tadasana - Stand erect with the feet together, the heels and big toes touching each other. Tighten the knees and pull the knee-caps up, contract the hips and pull up the muscles at the back of the thighs. Keep the stomach in, chest forward, spine stretched up and the neck straight. Do not bear the weight of the body either on the heels or the toes, but distribute it evenly on them both. Ideally in Tadasana the arms are stretched out over the head, but for the sake of convenience, one can place them by the side of the thighs. ',
    'Uttanasana - Stand in Tadasana, keeping the knees tight. Exhale, bend forward and place the fingers on the floor. Then place the palms on the floor by the side of the feet, behind the heels. Do not bend the legs at the knees.  Try to hold the head up and stretch the spine. Move the hips a little forward towards the head so as to bring the legs perpendicular to the floor. Remain in this position and take two deep breaths. Exhale, move the trunk closer to the legs and rest the head on the knees. Do not slacken the grip at the knees, but pull the knee-caps well up. Hold this position for a minute with deep and even breathing. Inhale and raise the head from the knees, but without lifting the palms from the floor. After two breaths, take a deep inhalation, lift the hands from the floor and come back to Tadasana.',
    'Utthita trikonasana - Stand in Tadasana. Inhale deeply and with a jump spread apart the legs sideways 3 to 4 feet. Raise the arms sideways, in line with the shoulders, palms facing down. Keep the arms parallel to the floor. Turn the right foot sideways 90 degrees to the right. Turn the left foot slightly to the right, keeping the left leg stretched out and tightened at the knee. Exhale, bend the trunk sideways to the right, bringing the right palm near the right ankle. If possible, the right palm should rest completely on the floor. Stretch the left arm up bringing it in line with the right shoulder and extend the trunk. The back of the legs, the back of the chest and the hips should be in a line with the thumb of the outstretched left hand. Keep the right knee locked tight by pulling up the knee-cap and keep the right knee facing the toes. Remain in this position from half a minute to a minute, breathing.',
    'Parivrtta trikonasana - Stand in Tadasana. Take a deep inhalation and with a jump spread the legs apart sideways 3 to 4 feet. Raise the arms sideways, in line with the shoulders, palms facing down. Turn the right foot sideways 90 degrees to the right. Turn the left foot 60 degrees to the right, keeping the left leg stretched out and tightened at the knee. Exhale, rotate the trunk in the opposite direction (to the right) so as to bring the left palm on the floor near the outer side of the right foot. Stretch the right arm up bringing it in line with the left arm. Gaze at the right thumb. Keep the knees tight. Do not lift the toes of the right foot from the floor. Remember to rest the outer side of the left foot well on the floor. Stretch both the shoulders and shoulder blades. Stay in this pose for half a minute with normal breathing. Inhale, lift the left hand from the floor, rotate the trunk back to its original position and come back to the initial position. Exhale, repeat the pose on the left side by turning the left foot sideways 90 degrees to the left and the right foot 60 degrees to the left and place the right palm on the floor near the outer side of the left foot.',
    'Utthita Parsvakonasana - Stand with your feet about 4–5 ft apart. Turn your left leg out by 90 degrees and slightly turn in the toes of your right foot. On an in-breath lift your arms to shoulder height. On an out-breath bend your left knee and go into a deep lunge. Your knee should be directly over your ankle, making your shin vertical. If your hips are tight, you may find that your left knee slides forward. If so, gently pull it back into line. This will encourage your hips to open. On an out-breath extend your upper body to the left (don’t fold forward). Place your left hand on the floor or on a block behind your foot. Extend your right arm over your head. Look up at your right palm. Repeat on the other side. Instead of putting your hand on the ground, you can place your elbow on your thigh.',
    'Prasarita Padottanasana - Stand in Tadasana. Inhale, place the hands on the waist and spread the legs apart 4.5 to 5 feet, Tighten the legs by drawing up the knee caps. Exhale, and place the palms on the floor in line with the shoulders between the feet. Inhale and raise the head up, keeping the back concave. Exhale, bend the elbows and rest the crown of the head on the floor, keeping the weight of the body on the legs. Do not throw the body weight on the head. Both feet, both palms and the head should be in a straight line. ',
    'Parsvottanasana - Stand with your feet 3–4 ft apart. Turn your left foot out by 90 degrees and turn in your right foot. On an in-breath, swing your hips round to face over your left leg. Release your tailbone toward the floor and lift your lower abdominals so that your pelvis sits vertically on top of your legs. Lift and straighten your knees and thighs. Breathe in and raise your arms above your head. On an out-breath softly fold forward from your hip sockets and place your hands on your shin, ankle or the floor – wherever is comfortable. Keep your knees straight and your hips parallel. Lengthen your spine and check that your neck and head are aligned. Lift your abdominals slightly as you lengthen your ribs away from your hips. Breathe. Repeat on the other side. If your hamstrings are tight, fold forward by 45 degrees instead of 90 degrees. Put your hands on your thighs. The aim of this posture is the correct alignment of your legs, pelvis and torso. Visualize your kidneys as a pair of weighing scales on your back, keeping you level. Don’t twist your torso.',
    'Utthita Parsva Sahita - From Tadasana bring your left knee toward your belly. Reach your left arm inside the thigh, cross it over the front ankle, and hold the outside of your left foot. If your hamstrings are tight, hold a strap looped around the left sole. Firm the front thigh muscles of the standing leg, and press the outer thigh inward. Inhale and extend the left leg forward. Straighten the knee as much as possible. If you are steady, swing the leg out to the side. Breathe steadily; breathing takes concentration, but it helps you balance. Hold for 30 seconds, then swing the leg back to center with an inhale, and lower the foot to the floor with an exhale. Repeat on the other side for the same length of time.',
    'Virabhadrasana I - Take a deep inhalation, and with a jump spread the legs apart sideways 4 to 4.5  feet. Raise the arms sideways in line with the shoulders, palms facing down. Turn the right foot sideways 90 degrees to the right and the left foot slightly to the right, keeping the left leg stretched out and tightened at the knee. Stretch the hamstring muscles of the left leg. Exhale and bend the right knee till the right thigh is parallel to the floor, keeping the right shin perpendicular to the floor, thus forming a right angle between the right thigh and the right calf. The bent knee should not extend beyond the ankle, but should be in line with the heel. Stretch out the hands sideways, as though two persons are pulling you from opposite ends. Turn the face to the right and gaze at the right palm. Stretch the back muscles of the left leg fully. The back of the legs, the dorsal region and the hips should be in one line.',
    'Virabhadrasana III - Stand in Tadasana. Raise both arms above the head; stretch up and join the palms. Take a deep inhalation and with a jump spread the legs apart sideways 4 to 4.5 feet. Exhale, turn to the right. Simultaneously turn the tight foot 90 degrees to the right and the left foot slightly to the right. Flex the right knee till the right thigh is parallel to the floor and the right shin perpendicular to the floor, forming a right angle  between the right thigh and the right calf. The bent knee should not extend beyond the ankle, but should be in line with the heel. Stretch out the left leg and tighten at the knee. The face, chest and right knee should face the same way as the right foot, as illustrated. Throw the head up, stretch the spine and gaze at the joined palms. Hold the pose from 20 seconds to half a minute with normal breathing.',
    'Utkatasana - Stand in Tadasana, stretch the arms straight over the head and join the palms, Exhale, bend the knees and lower the trunk till the thighs are parallel to the floor. Do not stoop forward, but keep the chest as far back as possible and breathe normally. Stay in the pose for a few seconds, 30 being sufficient, It is difficult to balance in this pose. Inhale, straighten the legs, lower the arms, come back to Tadasana and relax.',
    'Adho Mukha Svanasana - Lie full length on the floor on the stomach, face downwards. The feet should be kept one foot apart. Rest the palms by the side of the shoulder, the fingers straight and pointing in the direction of the head. Exhale and raise the trunk from the floor. Straighten the arms, move the head inwards towards the feet and place the crown of the head on the floor, keeping the elbows straight and extending the back. Keep the legs stiff and do not bend at the knees. The soles of the feet should rest completely on the floor, while the feet should be parallel to each other, the toes pointing straight ahead. Stay in the pose for about a minute with deep breathing. Then with an exhalation lift the head off the floor, stretch the trunk forward and lower the body gently to the floor and relax.',
    'Bhujangasana - Lie flat on the floor on the stomach. Bend the elbows and place the palms on the floor on either side of the waist. Exhale, lift the head and trunk up and back, by stretching the arms fully, without moving the pubic region and the legs. Remain in this position breathing normally for a few seconds.',
    'Setu Bandha Sarvangasana - Lie flat on the back on the floor. Take a few deep breaths. Bend the knees, widen the legs at the knees and bring the heels in towards the buttocks. Keep the heels together and rest the outer sides firmly on the floor. Bring the hands by the side of the head and, with an exhalation, raise the trunk and arch the body up to rest the crown of the head on the floor. Pull the head as far back as possible by stretching the neck up and lifting the dorsal and lumbar regions of the back off the floor. Hold this position for a few seconds with normal breathing. ',
    'Urdhva Dhanurasana - Lie on your back with your knees bent and your feet hip-width apart. Move into bridge pose. It helps to open your chest as fully as you can . Try bringing your hands to the back of your lower ribs and lifting your chest as fully as possible. Keep your knees parallel. Bring your hands to the ground beside your head. Your fingertips should face your shoulders and your elbows should point straight upward – don’t let them flop sideways. Try to keep your thumbs in contact with the ground. Keep your hips lifted. Breathe in and lift your body up by pressing down into your hands and feet, and forward through your thighs. Once fully in the posture you can rock forward and backward (toward your toes and then your nose) a few times to open your chest. Return to the ground gently and lie flat for a few moments. Rest in child pose If you find step three difficult, remain in step 2 but push up so that the top of your head rests on the floor for a few seconds. don’t take much weight on your head. ',
    'Balasana - Kneel with your knees and ankles close together (don’t sit back on your heels yet). On an in-breath, lift your arms gently above your head and feel your whole back lengthen. Keep your neck and low back long and loose. Breathe steadily. On an out-breath, sit back on your heels and gently fold forward. Lower your forehead to the floor and rest your hands alongside your feet, palms facing upward. Breathe softly and steadily. Relax the muscles in your neck, shoulders and chest. If you find kneeling uncomfortable, try placing a rolled up mat or blanket under your ankles to take the pressure off the tops of your feet. You can place a block between your hips and heels if your knees feel tight, or rest your forehead on a block if your head does not easily reach the floor. Observe your breathing through the movement of your diaphragm pressed against your thighs.',
    'Baddha Konasana - Sit with the soles of your feet together and your back straight. Pull up your lower abdominal muscles to give support to your spine. Place your hands on your feet, ankles or shins, wherever they will comfortably reach. Allow your inner thighs to relax and let your knees drop to the sides. Breathe in and broaden and lift your chest. Although this may seem a simple posture, many people find it difficult. If you find that you cannot comfortably sit straight, try sitting on the edge of a block. This will support you in an upright position, making the posture easier. Remember that the main aims of bound angle pose are to lengthen the spine, fold forward at the hips (rather than the waist) and relax the thighs – not to push your head toward the floor.',
    'Navasana - Sit on the floor with your legs straight in front of you. Press your hands on the floor a little behind your hips, fingers pointing toward the feet, and strengthen the arms. Lift through the top of the sternum and lean back slightly. As you do this make sure your back does not round; continue to lengthen the front of your torso between the pubis and top sternum. Sit on the "tripod" of your two sitting bones and tailbone. Exhale and bend your knees, then lift your feet off the floor, so that the thighs are angled about 45-50 degrees relative to the floor. Lengthen your tailbone into the floor and lift your pubis toward your navel. If possible, slowly straighten your knees, raising the tips of your toes slightly above the level of your eyes. If this is not possible remain with your knees bent, perhaps lifting the shins parallel to the floor. Stretch your arms alongside the legs, parallel to each other and the floor. Spread the shoulder blades across your back and reach strongly out through the fingers. If this is not possible, keep the hands on the floor beside your hips or hold on to the backs of your thighs. While the lower belly should be firm, it should not get hard and thick. Try to keep the lower belly relatively flat. Press the heads of the thigh bones toward the floor to help anchor the pose and lift the top sternum. Breathe easily. Tip the chin slightly toward the sternum so the base of the skull lifts lightly away from the back of the neck.',
    'Phalakasana - Start in downward-facing dog, then inhale and draw your torso forward until the arms are perpendicular to the floor and the shoulders directly over the wrists, torso parallel to the floor. Press your outer arms inward and firm the bases of your index fingers into the floor. Firm your shoulder blades against your back, then spread them away from the spine. Also spread your collarbones away from the sternum. Press your front thighs up toward the ceiling, but resist your tailbone toward the floor as you lengthen it toward the heels. Lift the base of the skull away from the back of the neck and look straight down at the floor, keeping the throat and eyes soft. Plank Pose is one of the positions in the traditional Sun Salutation sequence. You can also perform this pose by itself and stay anywhere from 30 seconds to 1 minute.',
    'Purvottanasana - Sit in Dandasana (Staff Pose) with your hands several inches behind your hips and your fingers pointing forward. Bend your knees and place your feet on the floor, big toes turned inward, heels at least a foot away from your buttocks. Exhale, press your inner feet and hands down against the floor, and lift your hips until you come into a reverse tabletop position, torso and thighs approximately parallel to the floor, shins and arms approximately perpendicular. Without losing the height of your hips, straighten your legs one at a time. Lift your hips still higher without hardening your buttocks. Press your shoulder blades against your back torso to support the lift of your chest. Without compressing the back of your neck, slowly drop your head back.',
    'Bhuja Pidasana - Squat with your feet a little less than shoulder width apart, knees wide. Tilt your torso forward between your inner thighs. Then, keeping your torso low, raise your hips until your thighs become close to parallel to the floor. Snug your upper left arm and shoulder as much as possible under the back of your left thigh just above the knee, and place your left hand on the floor at the outside edge of your left foot, fingers pointing forward. Then repeat on the right. As you do this your upper back will round. Press your inner hands firmly against the floor and slowly begin to rock your weight back, off your feet and onto your hands. As you straighten your arms, your feet will lift lightly off floor, not by raw strength but by carefully shifting your center of gravity. Squeeze your outer arms with your inner thighs, and cross your right ankle over your left ankle. Look straight ahead. Hold for 30 seconds, then bend your elbows and lightly release your feet back to the floor with an exhale.',
    'Marichyasana - Sit in Dandanasa (Staff pose), then bend your right knee and put the foot on the floor, with the heel as close to the right sitting bone as possible. Keep the left leg strong and rotated slightly inward; ground the head of the thigh bone into the floor. Press the back of the left heel and the base of the big toe away from the pelvis. Also press the inner right foot actively into the floor, but soften the inner right groin to receive the pubis as you twist. Grounding the straight-leg thigh and bent-knee foot will help you lengthen your spine, which is always the first prerequisite of a successful twist. With an exhalation, rotate your torso to the right and wrap your left arm around the right thigh. Hold the outer thigh with your left hand, then pull the thigh up as you release the right hip toward the floor. Press your right fingertips onto the floor just behind your pelvis to lift the torso slightly up and forward. Remember to keep your straight leg and bent-knee foot grounded. Sink the inner right groin deeper into the pelvis, then lengthen your front belly up out of the groin along the inner right thigh. Continue lengthening the spine with each inhalation, and twist a little more with each exhalation. Hug the thigh to your belly, then lean back against your shoulder blades into an upper-back backbend. Gently turn your head to the right to complete the twist in your cervical spine.',
    'Paschimottanasana - Unless you are very flexible, sit on a block to make the pose much easier. Alternatively, bend your knees, hold the soles of your feet and bring your chest to your thighs – now gradually extend your legs. Another modification is to practice with straight legs while holding onto a belt that is looped around your feet. Fold forward from your hips on an out-breath. Extend the spine as far as you can (don’t lead with your chin). Rest your hands on your legs. Align your head and spine. Keep your chest area open. Gently clasp your toes, ankles or whichever part of your legs you can reach. On an in-breath, lift your body and your abdominal and pelvic floor muscles and lengthen your spine. On your next out-breath fold softly forward, bending your elbows outward and keeping your neck and shoulders relaxed. Repeat for several breaths.',
    'Baddha Konasana II - Sit with the soles of your feet together and your back straight. Pull up your lower abdominal muscles to give support to your spine. Place your hands on your feet, ankles or shins, wherever they will comfortably reach. Allow your inner thighs to relax and let your knees drop to the sides. Breathe in and broaden and lift your chest. Although this may seem a simple posture, many people find it difficult. If you find that you cannot comfortably sit straight, try sitting on the edge of a block. This will support you in an upright position, making the posture easier. Remember that the main aims of bound angle pose are to lengthen the spine, fold forward at the hips (rather than the waist) and relax the thighs – not to push your head toward the floor. As you breathe out, keep your chest broad and fold softly forward at your hips. Keep your back flat. When you can go no further, allow your head to drop gently and your spine to curve. Don’t hunch your shoulders or pull on your feet. Relax. Breathe out to release your thighs and breathe in to lengthen your spine. Come up slowly.',
    'Upavistha Konasana - From a sited position open your legs to an angle of about 90 degrees. Press your hands against the floor and slide your buttocks forward, widening the legs another 10 to 20 degrees. If you cannot sit comfortably on the floor, raise your buttocks on a folded blanket. Rotate your thighs outwardly, pinning the outer thighs against the floor, so that the knee caps point straight up toward the ceiling. Reach out through your heels and stretch your soles, pressing though the balls of the feet. With your thigh bones pressed heavily into the floor and your knee caps pointing up at the ceiling, walk your hands forward between your legs. Keep your arms long. As with all forward bends, the emphasis is on moving from the hip joints and maintaining the length of the front torso. As soon as you find yourself bending from the waist, stop, re-establish the length from the pubis to the navel, and continue forward if possible. Increase the forward bend on each exhalation until you feel a comfortable stretch in the backs of your legs. Stay in the pose 1 minute or longer. Then come up on an inhalation with a long front torso.',
    'Sarvangasana - Lie on your back. Bend your knees and bring them toward your chest. Place the palms of your hands on the ground on either side of your body. Draw up your abdominal muscles and gently rock your hips off the floor. Catch your hips with your hands and bring your elbows as close together as you can. Slip your shoulder blades under your back and lengthen your torso. Keep your knees bent toward your chest and check that your breathing is steady and smooth. Never fling yourself carelessly into shoulder stand. This posture requires precision and control so that you do not hurt your neck. Keep your head centered.',
    'Salamba Sirsasana - Spread a blanket four-fold on the floor and kneel near it. Rest the forearms on the centre of the blanket. While doing so take care that the distance between the elbows on the floor is not wider than the shoulders.  Interlock the fingers right up to the finger-lips, so that the palms form a cup. Place the sides of the palms near the little fingers on the blanket. While going up onto your head or balancing, the fingers should be kept tightly locked. If they are left loose, the weight of the body falls on them and the arms ache. So remember to lock them well. Rest the crown of the head only on the blanket, so that the back of the head touches the palms which are cupped. Do not rest the forehead nor the back but only the crown of the head on the blanket. To do this move the knees towards the head. After securing the head position, raise the knees from the floor by moving the toes closer to the head. Exhale, take a gentle swing from the floor and lift the legs off the ground with bent knees. Take the swing in such a way that both feet leave the floor simultaneously. Stretch the legs and stand on the head keeping the whole body perpendicular to the floor.',
    'Halasana - Do Salamba Sarvangasana (Shoulder stand) with a firm chinlock. Release the chinlock, lower the trunk slightly, moving the arms and legs over the head and resting the toes on the floor. Tighten the knees by pulling up the hamstring muscles at the back of the thighs and raise the trunk. Place the hands in the middle of the back and press it to keep the trunk perpendicular to the floor. Stretch the arms on the floor in the direction opposite to that of the legs. Hook the thumbs and stretch the arms and legs. Interlock the fingers and turn the wrists so that the thumbs rest on the floor. Stretch the palms along with the fingers, tighten the arms at the elbows and pull them from the shoulders. The legs and the hands are stretched in opposite directions and this stretches the spine completely.',
    'Karna Pidasana - Do Halasana and after completing the time limit for that pose, flex the knees and rest the right knee by the side of the  right ear and the left knee by the side of the left. Both knees should rest on the floor, pressing the ears. Keep the toes stretched out and join the heels and toes. Rest the hands either on the back of the ribs (Plate 245) or interlock the fingers and stretch out the arms as in Halasana. Remain in this position for half a minute or a minute with normal breathing. ',
    'Padmasana - To prepare for lotus, lie on your back with your knees bent and your feet flat on the floor. Put your left foot on your right knee and clasp your hands behind your right thigh. Breathe out and gently pull your right knee to your body. Swap legs. This is the half-lotus. If you are comfortable, try the full posture. From step two lift your left foot up onto your right thigh as close as possible to the right hip socket. Use blocks for support if you need to and never try to force your knees. Rest your hands on your knees, let your spine lengthen. Close your eyes if you like. Breathe steadily. Sit up and bend your left leg so that your outer thigh and calf rest on the floor with your heel close to your groin. Place your right foot on your left thigh, as close as possible to your hip socket. If your right knee is off the ground, place some folded blankets or blocks underneath it for support – use as many as you need. Don’t force or twist your knee.',
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
      setCount((count = postures.length));
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
      setCount(count - 1);
    }
  };

  let myOnclickkBack = function() {
    if (index === 0) {
      setIndex((index = 0));
    } else {
      setIndex(index - 1);
      setCount(count + 1);
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

          {/* <div className="counter">
            <span className="counter-value"> {count} </span>
            <h5>postures</h5>
          </div> */}

          <div className="row text-center">
            <div className=" coladv">
              <label>
                <input
                  type="checkbox"
                  id="tadasana"
                  value="img1"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img1.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="uttanasana"
                  value="img2"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img2.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="trikonasana"
                  value="img3"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img3.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Parivrtta trikonasana"
                  value="img4"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img4.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Parsvakonasana"
                  value="img5"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img5.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Padottanasana"
                  value="img6"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img6.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Parsvottanasana"
                  value="img7"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img7.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Utthita Parsva Sahita"
                  value="img8"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img8.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Virabhadrasana II"
                  value="img9"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img9.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Virabhadrasana III"
                  value="img10"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img10.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Utkatasana "
                  value="img11"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img11.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Adho Mukha Svanasana "
                  value="img12"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img12.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Bhujangasana"
                  value="img13"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img13.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Setu Bandha Sarvangasana"
                  value="img14"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img14.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Urdhva Dhanurasana"
                  value="img15"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img15.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Balasana"
                  value="img16"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img16.png"></img>
              </label>

              <label>
                <input
                  type="checkbox"
                  id="Baddha Konasana"
                  value="img17"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img17.png"></img>
              </label>

              <label>
                <input
                  type="checkbox"
                  id="Navasana"
                  value="img18"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img18.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Phalakasana"
                  value="img19"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img19.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Purvottanasana"
                  value="img20"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img20.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Bhuja Pidasana"
                  value="img21"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img21.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Marichyasana"
                  onClick={() => handleClick()}
                  value="img22"
                />
                <img className="myIcons" alt="" src="images/img22.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Paschimottanasana"
                  value="img23"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img23.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Baddha Konasana II "
                  value="img24"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img24.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Upavistha Konasana "
                  value="img25"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img25.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Sarvangasana"
                  onClick={() => handleClick()}
                  value="img26"
                />
                <img className="myIcons" alt="" src="images/img26.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Salamba Sirsasana"
                  value="img27"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img27.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Halasana "
                  value="img28"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img28.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Karna Pidasana "
                  value="img29"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img29.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Padmasana"
                  onClick={() => handleClick()}
                  value="img30"
                />
                <img className="myIcons" alt="" src="images/img30.png"></img>
              </label>
              <label>
                <input
                  type="checkbox"
                  id="Savasana"
                  value="img31"
                  onClick={() => handleClick()}
                />
                <img className="myIcons" alt="" src="images/img31.png"></img>
              </label>
            </div>
          </div>

          <br></br>
          <div className="row justify-content-center ">
            <Link to="/Main">
              <span className="myButton btn">home</span>
            </Link>
            <span
              className="myButton btn"
              onClick={() => {
                myOnclickk();
              }}
            >
              set
            </span>
          </div>
        </div>
        <div id="containerAdvanced">
          <div className="col " id="personalized">
            <div className="counter  mx-auto">
              <span className="counter-value"> {count} </span>
              <h5>postures</h5>
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
              <Link to="/Main">
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
