const yt_embed_tag = "yt";
const base_yt_embed_iframe = '<iframe width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowfullscreen></iframe>'

document.addEventListener('DOMContentLoaded', async function() {
  $(yt_embed_tag).each(function() {
    const yt = $(this);
    const yt_new = $(base_yt_embed_iframe);
    yt_new.attr("src", "https://youtube.com/embed/" + yt.attr("data-video-id"));
    yt_new.attr("title", yt.html().replaceAll(String.fromCharCode(0x00ad),""));
    if (yt.parent().is("p")) yt.parent().replaceWith(yt_new);
    else yt.replaceWith(yt_new);
  })
})