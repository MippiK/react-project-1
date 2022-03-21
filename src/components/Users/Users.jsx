import React from "react";
import s from './Users.module.css'

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
        {id: 1, username: 'romaniv1437', status: 'coding...', followed_by_user: true, location: {cityName: 'None', country: 'None'},
          profile_photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-hInDMDTqCtk%2FWtgJ-WuI05I%2FAAAAAAAAF9A%2FrhJ-tAQCeBc3jQqqdAjVSqTwh6M9KCaAACEwYBhgL%2Fs1600%2FFawk%252BMask%252BProfile%252BPicture.png&f=1&nofb=1'
        },
        {id: 2, username: 'john_babon', status: 'always eat', followed_by_user: false, location: {cityName: 'Lviv', country: 'Ukraine'},
          profile_photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-hInDMDTqCtk%2FWtgJ-WuI05I%2FAAAAAAAAF9A%2FrhJ-tAQCeBc3jQqqdAjVSqTwh6M9KCaAACEwYBhgL%2Fs1600%2FFawk%252BMask%252BProfile%252BPicture.png&f=1&nofb=1'
        },
        {id: 3, username: 'h@ck_ur_l1f3', status: 'im here', followed_by_user: false, location: {cityName: 'Your addres', country: 'Your home'},
          profile_photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-hInDMDTqCtk%2FWtgJ-WuI05I%2FAAAAAAAAF9A%2FrhJ-tAQCeBc3jQqqdAjVSqTwh6M9KCaAACEwYBhgL%2Fs1600%2FFawk%252BMask%252BProfile%252BPicture.png&f=1&nofb=1'
        },
        {id: 4, username: 'tony_s_hawkoi', status: 'skate all day', followed_by_user: true, location: {cityName: 'NewYork', country: 'U.S.A.'},
          profile_photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-hInDMDTqCtk%2FWtgJ-WuI05I%2FAAAAAAAAF9A%2FrhJ-tAQCeBc3jQqqdAjVSqTwh6M9KCaAACEwYBhgL%2Fs1600%2FFawk%252BMask%252BProfile%252BPicture.png&f=1&nofb=1'
        },
        {id: 5, username: 'hello_my_name_is', status: 'my first page', followed_by_user: false, location: {cityName: 'Kiev', country: 'Ukraine'},
          profile_photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-hInDMDTqCtk%2FWtgJ-WuI05I%2FAAAAAAAAF9A%2FrhJ-tAQCeBc3jQqqdAjVSqTwh6M9KCaAACEwYBhgL%2Fs1600%2FFawk%252BMask%252BProfile%252BPicture.png&f=1&nofb=1'
        },
   ])
  }

  return (
      <div className={s.friends}>
        { props.users.map(u => {
          return (
              <div className={s.friends_element}>
                <div className={s.left_content}>
                  <img src={u.profile_photo} alt="user_picture"/>
                  {u.followed_by_user ?
                      <button onClick={() => (props.unfollow(u.id))}>Unfollow</button> :
                      <button onClick={() => (props.follow(u.id))}>Follow</button> }
                </div>

                <div className={s.right_content}>
                  <div className={s.user_info}>
                    <a href="#">{u.username}</a>
                    <p>{u.status}</p>
                  </div>

                  <div className={s.user_country}>
                    <p>{u.location.cityName}</p>
                    <p>{u.location.country}</p>
                  </div>
                </div>
              </div>
          )
        })}
      </div>
  )
}

export default Users;