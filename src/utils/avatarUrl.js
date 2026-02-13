/**
 * 在线随机头像/图片 URL
 * 使用 i.pravatar.cc 获取随机头像，picsum.photos 获取随机大图
 */

/** 随机头像 - 不同 id 得到不同头像 */
export const getAvatarUrl = (id, size = 200) =>
  `https://i.pravatar.cc/${size}?u=${id}`;

/** 随机图片（用于封面、推文配图等）- 不同 seed 得到不同图 */
export const getPhotoUrl = (seed, width = 800, height = 400) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`;
