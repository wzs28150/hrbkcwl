<template>
<div id="page">
<div id="map_contents">
    <!-- map -->
    <div id="map" style="height: 747px; position: relative; overflow: hidden;"><div style="height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; background-color: rgb(229, 227, 223);"><div class="gm-style" style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px;"><div tabindex="0" style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; cursor: url(&quot;https://maps.gstatic.com/mapfiles/openhand_8_8.cur&quot;) 8 8, default;"><div style="z-index: 1; position: absolute; top: 0px; left: 0px; width: 100%; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 0, -49);"><div style="position: absolute; left: 0px; top: 0px; z-index: 100; width: 100%;"><div style="position: absolute; left: 0px; top: 0px; z-index: 0;"><div aria-hidden="true" style="position: absolute; left: 0px; top: 0px; z-index: 1; visibility: inherit;"><div style="width: 256px; height: 256px; position: absolute; left: -50px; top: 118px;"></div><div style="width: 256px; height: 256px; position: absolute; left: -50px; top: 374px;"></div><div style="width: 256px; height: 256px; position: absolute; left: 206px; top: 118px;"></div><div style="width: 256px; height: 256px; position: absolute; left: 206px; top: 374px;"></div><div style="width: 256px; height: 256px; position: absolute; left: -50px; top: -138px;"></div><div style="width: 256px; height: 256px; position: absolute; left: -50px; top: 630px;"></div><div style="width: 256px; height: 256px; position: absolute; left: 206px; top: -138px;"></div><div style="width: 256px; height: 256px; position: absolute; left: 206px; top: 630px;"></div></div></div></div><div style="position: absolute; left: 0px; top: 0px; z-index: 101; width: 100%;"></div><div style="position: absolute; left: 0px; top: 0px; z-index: 102; width: 100%;"></div><div style="position: absolute; left: 0px; top: 0px; z-index: 103; width: 100%;"><div style="position: absolute; left: 0px; top: 0px; z-index: -1;"><div aria-hidden="true" style="position: absolute; left: 0px; top: 0px; z-index: 1; visibility: inherit;"><div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -50px; top: 118px;"></div><div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -50px; top: 374px;"><canvas draggable="false" height="512" width="512" style="user-select: none; position: absolute; left: 0px; top: 0px; height: 256px; width: 256px;"></canvas></div><div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 206px; top: 118px;"></div><div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 206px; top: 374px;"><canvas draggable="false" height="512" width="512" style="user-select: none; position: absolute; left: 0px; top: 0px; height: 256px; width: 256px;"></canvas></div><div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -50px; top: -138px;"></div><div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -50px; top: 630px;"></div><div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 206px; top: -138px;"></div><div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 206px; top: 630px;"></div></div></div></div><div style="position: absolute; z-index: 0; left: 0px; top: 0px;"><div style="overflow: hidden;"></div></div><div style="position: absolute; left: 0px; top: 0px; z-index: 0;"><div aria-hidden="true" style="position: absolute; left: 0px; top: 0px; z-index: 1; visibility: inherit;"><div style="position: absolute; left: -50px; top: 118px; transition: opacity 200ms ease-out;"><img draggable="false" alt="" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i58211!3i25807!4i256!2m3!1e0!2sm!3i420119948!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjMzfHMuZTpsfHAudjpvZmY!4e0!5m1!5f2&amp;token=67404" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div><div style="position: absolute; left: -50px; top: 374px; transition: opacity 200ms ease-out;"><img draggable="false" alt="" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i58211!3i25808!4i256!2m3!1e0!2sm!3i420119948!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjMzfHMuZTpsfHAudjpvZmY!4e0!5m1!5f2&amp;token=72074" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div><div style="position: absolute; left: 206px; top: 118px; transition: opacity 200ms ease-out;"><img draggable="false" alt="" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i58212!3i25807!4i256!2m3!1e0!2sm!3i420119948!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjMzfHMuZTpsfHAudjpvZmY!4e0!5m1!5f2&amp;token=126831" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div><div style="position: absolute; left: 206px; top: 374px; transition: opacity 200ms ease-out;"><img draggable="false" alt="" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i58212!3i25808!4i256!2m3!1e0!2sm!3i420119948!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjMzfHMuZTpsfHAudjpvZmY!4e0!5m1!5f2&amp;token=430" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div><div style="position: absolute; left: -50px; top: -138px; transition: opacity 200ms ease-out;"><img draggable="false" alt="" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i58211!3i25806!4i256!2m3!1e0!2sm!3i420119948!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjMzfHMuZTpsfHAudjpvZmY!4e0!5m1!5f2&amp;token=62734" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div><div style="position: absolute; left: -50px; top: 630px; transition: opacity 200ms ease-out;"><img draggable="false" alt="" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i58211!3i25809!4i256!2m3!1e0!2sm!3i420119948!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjMzfHMuZTpsfHAudjpvZmY!4e0!5m1!5f2&amp;token=76744" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div><div style="position: absolute; left: 206px; top: -138px; transition: opacity 200ms ease-out;"><img draggable="false" alt="" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i58212!3i25806!4i256!2m3!1e0!2sm!3i420119948!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjMzfHMuZTpsfHAudjpvZmY!4e0!5m1!5f2&amp;token=122161" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div><div style="position: absolute; left: 206px; top: 630px; transition: opacity 200ms ease-out;"><img draggable="false" alt="" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i58212!3i25809!4i256!2m3!1e0!2sm!3i420119948!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjMzfHMuZTpsfHAudjpvZmY!4e0!5m1!5f2&amp;token=5100" style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div></div></div></div><div class="gm-style-pbc" style="z-index: 2; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; opacity: 0;"><p class="gm-style-pbt"></p></div><div style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px;"><div style="z-index: 1; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px;"></div></div><div style="z-index: 4; position: absolute; top: 0px; left: 0px; width: 100%; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 0, -49);"><div style="position: absolute; left: 0px; top: 0px; z-index: 104; width: 100%;"></div><div style="position: absolute; left: 0px; top: 0px; z-index: 105; width: 100%;"></div><div style="position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;"></div><div style="position: absolute; left: 0px; top: 0px; z-index: 107; width: 100%;"></div></div></div><div style="margin-left: 5px; margin-right: 5px; z-index: 1000000; position: absolute; left: 0px; bottom: 0px;"><a target="_blank" href="https://maps.google.com/maps?ll=35.6743,139.767935&amp;z=16&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=apiv3" title="Click to see this area on Google Maps" style="position: static; overflow: visible; float: none; display: inline;"><div style="width: 66px; height: 26px; cursor: pointer;"><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/google4_hdpi.png" draggable="false" style="position: absolute; left: 0px; top: 0px; width: 66px; height: 26px; user-select: none; border: 0px; padding: 0px; margin: 0px;"></div></a></div><div style="background-color: white; padding: 15px 21px; border: 1px solid rgb(171, 171, 171); font-family: Roboto, Arial, sans-serif; color: rgb(34, 34, 34); box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 16px; z-index: 10000002; display: none; width: 256px; height: 148px; position: absolute; left: 50px; top: 284px;"><div style="padding: 0px 0px 10px; font-size: 16px;">Map Data</div><div style="font-size: 13px;">Map data ©2018 Google, ZENRIN</div><div style="width: 13px; height: 13px; overflow: hidden; position: absolute; opacity: 0.7; right: 12px; top: 12px; z-index: 10000;"><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/mapcnt6.png" draggable="false" style="position: absolute; left: -2px; top: -336px; width: 59px; height: 492px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div><img alt="" src="https://maps.gstatic.com/mapfiles/transparent.png" draggable="false" style="width: 37px; height: 37px; user-select: none; border: 0px; padding: 0px; margin: 0px; position: absolute; right: 0px; top: 0px; z-index: 10001; cursor: pointer;"></div><div class="gmnoprint" style="z-index: 1000001; position: absolute; right: 71px; bottom: 0px; width: 160px;"><div draggable="false" class="gm-style-cc" style="user-select: none; height: 14px; line-height: 14px;"><div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;"><div style="width: 1px;"></div><div style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"></div></div><div style="position: relative; padding-right: 6px; padding-left: 6px; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;"><a style="text-decoration: none; cursor: pointer; display: none;">Map Data</a><span>Map data ©2018 Google, ZENRIN</span></div></div></div><div class="gmnoscreen" style="position: absolute; right: 0px; bottom: 0px;"><div style="font-family: Roboto, Arial, sans-serif; font-size: 11px; color: rgb(68, 68, 68); direction: ltr; text-align: right; background-color: rgb(245, 245, 245);">Map data ©2018 Google, ZENRIN</div></div><div class="gmnoprint gm-style-cc" draggable="false" style="z-index: 1000001; user-select: none; height: 14px; line-height: 14px; position: absolute; right: 0px; bottom: 0px;"><div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;"><div style="width: 1px;"></div><div style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"></div></div><div style="position: relative; padding-right: 6px; padding-left: 6px; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;"><a href="https://www.google.com/intl/en-US_US/help/terms_maps.html" target="_blank" style="text-decoration: none; cursor: pointer; color: rgb(68, 68, 68);">Terms of Use</a></div></div><button draggable="false" title="Toggle fullscreen view" aria-label="Toggle fullscreen view" type="button" style="background: none; border: 0px; margin: 10px 14px; padding: 0px; position: absolute; cursor: pointer; user-select: none; width: 25px; height: 25px; overflow: hidden; top: 0px; right: 0px;"><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/sv9.png" draggable="false" class="gm-fullscreen-control" style="position: absolute; left: -52px; top: -86px; width: 164px; height: 175px; user-select: none; border: 0px; padding: 0px; margin: 0px;"></button><div class="gmnoprint gm-bundled-control gm-bundled-control-on-bottom" draggable="false" controlwidth="28" controlheight="55" style="margin: 10px; user-select: none; position: absolute; bottom: 81px; left: 0px;"><div class="gmnoprint" controlwidth="28" controlheight="55" style="position: absolute; left: 0px; top: 0px;"><div draggable="false" style="user-select: none; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; border-radius: 2px; cursor: pointer; background-color: rgb(255, 255, 255); width: 28px; height: 55px;"><button draggable="false" title="Zoom in" aria-label="Zoom in" type="button" style="background: none; display: block; border: 0px; margin: 0px; padding: 0px; position: relative; cursor: pointer; user-select: none; width: 28px; height: 27px; top: 0px; left: 0px;"><div style="overflow: hidden; position: absolute; width: 15px; height: 15px; left: 7px; top: 6px;"><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/tmapctrl_hdpi.png" draggable="false" style="position: absolute; left: 0px; top: 0px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; width: 120px; height: 54px;"></div></button><div style="position: relative; overflow: hidden; width: 67%; height: 1px; left: 16%; background-color: rgb(230, 230, 230); top: 0px;"></div><button draggable="false" title="Zoom out" aria-label="Zoom out" type="button" style="background: none; display: block; border: 0px; margin: 0px; padding: 0px; position: relative; cursor: pointer; user-select: none; width: 28px; height: 27px; top: 0px; left: 0px;"><div style="overflow: hidden; position: absolute; width: 15px; height: 15px; left: 7px; top: 6px;"><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/tmapctrl_hdpi.png" draggable="false" style="position: absolute; left: 0px; top: -15px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; width: 120px; height: 54px;"></div></button></div></div><div class="gmnoprint" controlwidth="28" controlheight="0" style="display: none; position: absolute;"><div title="Rotate map 90 degrees" style="width: 28px; height: 28px; overflow: hidden; position: absolute; background-color: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; border-radius: 2px; cursor: pointer; display: none;"><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/tmapctrl4_hdpi.png" draggable="false" style="position: absolute; left: -141px; top: 6px; width: 170px; height: 54px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div><div class="gm-tilt" style="width: 28px; height: 28px; overflow: hidden; position: absolute; background-color: rgb(255, 255, 255); box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; border-radius: 2px; top: 0px; cursor: pointer;"><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/tmapctrl4_hdpi.png" draggable="false" style="position: absolute; left: -141px; top: -13px; width: 170px; height: 54px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div></div></div></div></div></div>
    <!--/map -->

    <!-- map_nav -->
    <nav id="map_nav">
        <div id="map_toapp" class="map_toapp_open" style="top: 692px;">
            <div class="button button--inline">
                <div class="button__body">
                    <a href="javascript:void(0)" onclick="location.href='http://maps.google.com/maps?q=35.67429986%2C139.767935%28%22おたる 政寿司銀座%22%29&amp;ll=35.67429986%2C139.767935';" class="button__item button__item--default">
                        <div>
                            <p class="text--default-bold"><span>地図アプリで見る</span></p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
            </nav>
    <!--/map_nav -->

    <!-- map_info -->
    <div id="map_info">

        <!-- map_name -->
        <div id="map_name" style="opacity: 1;">
            <h1 class="map_ttl">おたる 政寿司 銀座</h1>
            <span class="icon_datauri"></span>
        </div>
        <!--/map_name -->
        <!-- map_detail -->
        <div id="map_detail" style="opacity: 1;">
            <div class="map_else">
                <table>
                                            <tbody><tr>
                            <th>住所</th>
                            <td>
                                東京都中央区銀座1-7-7
                                 POLAビル10F                            </td>
                        </tr>
                                                                <tr>
                            <th>アクセス</th>
                            <td>
                                                                    ＪＲ 有楽町駅 徒歩5分 
                                    <br>                                                                    地下鉄銀座線 銀座駅 徒歩5分 
                                    <br>                                                                    地下鉄有楽町線 銀座一丁目駅 徒歩1分 
                                                                                                </td>
                        </tr>
                                    </tbody></table>
                            </div>
                            <div class="button -mt12">
                    <div class="button__body">
                        <a href="tel:050-3476-8678" class="button__item button__item--big" onclick="sc_count_shop('phone_to_2')">
                            <div class="ic-tel">
                                <div>
                                    <p class="text--big -clr-white"><span>電話する</span>
                                    </p>
                                    <p class="text--minor -clr-white"><span>050-3476-8678</span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                                </div>
        <!--/map_detail -->
    </div>
    <!--/map_info -->
</div>

	<div class="titlebar titlebar--tint-l">
		<div class="titlebar__body">
			<h2 class="heading--default">メニュー</h2>
		</div>
	</div>
	<div class="titlebar titlebar--tint-ss">
		<div class="titlebar__body">
			<h3 class="heading--default">おすすめメニュー</h3>
		</div>
	</div>
	<div class="-space-wide -mb16">
		<div class="col">
			<div class="col__4 -left">
				<a href="https://r.gnavi.co.jp/ga2v900/menu1/2/">
					<div class="image image--width-90">
						<div class="image__body">
							<img src="https://dummyimage.com/120x120/000/fff" alt="">
						</div>
					</div>
				</a>
				<div class="-mt4">
					<div class="-inline -wrap-90">
						<div class="flex flex--justify-center">
							<div class="flex__item">
								<a href="https://r.gnavi.co.jp/ga2v900/menu1/2/">
									<p class="-left">生ぼたんえび</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col__4 -center">
				<a href="https://r.gnavi.co.jp/ga2v900/menu1/3/">
					<div class="image image--width-90">
						<div class="image__body">
							<img src="https://dummyimage.com/120x120/000/fff" alt="">
						</div>
					</div>
				</a>
				<div class="-mt4">
					<div class="-inline -wrap-90">
						<div class="flex flex--justify-center">
							<div class="flex__item">
								<a href="https://r.gnavi.co.jp/ga2v900/menu1/3/">
									<p class="-left">北海道直送　海水うに</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col__4 -right">
				<a href="https://r.gnavi.co.jp/ga2v900/menu3/3/">
					<div class="image image--width-90">
						<div class="image__body">
							<img src="https://dummyimage.com/120x120/000/fff" alt="">
						</div>
					</div>
				</a>
				<div class="-mt4">
					<div class="-inline -wrap-90">
						<div class="flex flex--justify-center">
							<div class="flex__item">
								<a href="https://r.gnavi.co.jp/ga2v900/menu3/3/">
									<p class="-left">オリジナルお土産</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<ul class="listGroup listGroup--space-small listGroup--border_first -mb16">
		<li class="listGroup__item">
			<a href="https://r.gnavi.co.jp/ga2v900/menu1/" class="listGroup__layout ic-arr-r">
				<div class="listGroup__body">
					<div class="media">
						<div class="media__body media__body--middle">
							<p class="text--big">コース</p>
						</div>
						<div class="media__right media__right--middle">
							<p class="badge--list">15</p>
						</div>
					</div>
				</div>
			</a>
		</li>
		<li class="listGroup__item">
			<a href="https://r.gnavi.co.jp/ga2v900/menu4/" class="listGroup__layout ic-arr-r">
				<div class="listGroup__body">
					<div class="media">
						<div class="media__body media__body--middle">
							<p class="text--big">握り・逸品</p>
						</div>
						<div class="media__right media__right--middle">
							<p class="badge--list">44</p>
						</div>
					</div>
				</div>
			</a>
		</li>
		<li class="listGroup__item">
			<a href="https://r.gnavi.co.jp/ga2v900/menu2/" class="listGroup__layout ic-arr-r">
				<div class="listGroup__body">
					<div class="media">
						<div class="media__body media__body--middle">
							<p class="text--big">ランチ</p>
						</div>
						<div class="media__right media__right--middle">
							<p class="badge--list">11</p>
						</div>
					</div>
				</div>
			</a>
		</li>
		<li class="listGroup__item">
			<a href="https://r.gnavi.co.jp/ga2v900/menu5/" class="listGroup__layout ic-arr-r">
				<div class="listGroup__body">
					<div class="media">
						<div class="media__body media__body--middle">
							<p class="text--big">お飲み物</p>
						</div>
						<div class="media__right media__right--middle">
							<p class="badge--list">48</p>
						</div>
					</div>
				</div>
			</a>
		</li>
		<li class="listGroup__item">
			<a href="https://r.gnavi.co.jp/ga2v900/menu3/" class="listGroup__layout ic-arr-r">
				<div class="listGroup__body">
					<div class="media">
						<div class="media__body media__body--middle">
							<p class="text--big">お部屋・お土産</p>
						</div>
						<div class="media__right media__right--middle">
							<p class="badge--list">21</p>
						</div>
					</div>
				</div>
			</a>
		</li>
	</ul>
	<div class="section">
		<div class="titlebar titlebar--tint-l">
			<div class="titlebar__body">
				<h2 class="heading--default">席情報</h2>
			</div>
		</div>
		<ul class="listGroup">
			<li class="listGroup__item">
				<a href="https://r.gnavi.co.jp/ga2v900/equipment/seat/2381981/" class="listGroup__layout">
					<div class="listGroup__body">
						<div class="media">
							<div class="media__left">
								<div class="image image--width-70">
									<p class="image__body">
										<img src="t_00aj.jpg" alt="テーブル席" width="70">
									</p>
								</div>
							</div>
							<div class="media__body">
								<p class="heading--big -clr-link">テーブル席</p>
								<p class="-bold -clr-attention">宴会向きの席</p>
							</div>
						</div>
					</div>
				</a>
			</li>
		</ul>
		<div class="button button--full">
			<div class="button__body">
				<a href="https://r.gnavi.co.jp/ga2v900/equipment/" class="button__item ic-arr-r">
					<div>
						<p class="text--big">
							<span>席・個室情報をもっと見る</span>
						</p>
					</div>
				</a>
			</div>
		</div>
	</div>
	<div class="section">
		<div class="titlebar titlebar--tint-l">
			<div class="titlebar__body">
				<h2 class="heading--default">ピックアップ写真</h2>
			</div>
		</div>
		<div class="l-box--multi">
			<div class="col">
				<div class="col__4 -left">
					<a href="https://r.gnavi.co.jp/ga2v900/photo/">
						<div class="image image--width-90">
							<div class="image__body">
								<img src="t_00b5.jpg" alt="">
							</div>
						</div>
					</a>
				</div>
				<div class="col__4 -center">
					<a href="https://r.gnavi.co.jp/ga2v900/photo/">
						<div class="image image--width-90">
							<div class="image__body">
								<img src="t_008w.jpg" alt="">
							</div>
						</div>
					</a>
				</div>
				<div class="col__4 -right">
					<a href="https://r.gnavi.co.jp/ga2v900/photo/">
						<div class="image image--width-90">
							<div class="image__body">
								<img src="t_00b0.jpg" alt="">
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
		<div class="button button--full">
			<div class="button__body">
				<a href="https://r.gnavi.co.jp/ga2v900/photo/" class="button__item ic-arr-r">
					<div>
						<p class="text--big">
							<span>写真をもっと見る</span>
						</p>
					</div>
				</a>
			</div>
		</div>
	</div>
	<div class="section">
		<div class="titlebar titlebar--tint-l">
			<div class="titlebar__body">
				<h2 class="heading--default">お得に利用する</h2>
			</div>
		</div>
		<ul class="listGroup listGroup--space-small listGroup--border_first">
			<li class="listGroup__item">
				<a href="http://my.gnavi.co.jp/alliance_point/s/" class="listGroup__layout ic-arr-r">
					<div class="listGroup__body">
						<div class="label">
							<p class="label__item label__item--campaign">
								<span>予約キャンペーン</span>
							</p>
						</div>
						<p class="-bold">ネット予約で提携先ポイントも貯まる！</p>
					</div>
				</a>
			</li>
		</ul>
		<div class="button button--full">
			<div class="button__body">
				<a href="https://r.gnavi.co.jp/ga2v900/campaign/" class="button__item ic-arr-r">
					<div>
						<p class="text--big">
							<span>開催中のキャンペーンを全て見る</span>
						</p>
					</div>
				</a>
			</div>
		</div>
		<div class="gnaviService">
			<ul class="gnaviService__layout">
				<li class="gnaviService__item">
					<a href="https://r.gnavi.co.jp/ga2v900/relinfo/">
						<span class="gnaviService__text">ポイント貯まる</span>
						<span class="gnaviService__flag">OK</span>
					</a>
				</li>
				<li class="gnaviService__item gnaviService__item--false">
					<div>
						<span class="gnaviService__text">ネット予約でポイント使える</span>
						<span class="gnaviService__flag">NG</span>
					</div>
				</li>
				<li class="gnaviService__item gnaviService__item--false">
					<div>
						<span class="gnaviService__text">店頭でポイント使える</span>
						<span class="gnaviService__flag">NG</span>
					</div>
				</li>
				<li class="gnaviService__item">
					<a href="https://r.gnavi.co.jp/ga2v900/relinfo/">
						<span class="gnaviService__text">ぐるなびギフトカード使える</span>
						<span class="gnaviService__flag">OK</span>
					</a>
				</li>
			</ul>
			<div class="-center -mt12">
				<p class="-bold">
					<a href="https://r.gnavi.co.jp/ga2v900/relinfo/" class="-underline -clr-link">貯まるポイントや使い方など詳しく見る</a>
				</p>
			</div>
		</div>
	</div>
	<div id="js-inductionSurroundingShopList-component" class="js-abopt-nodata"></div>
	<div class="section section--border_bottom">
		<div class="titlebar titlebar--tint-l">
			<div class="titlebar__body">
				<h2 class="heading--default">基本情報</h2>
			</div>
		</div>
		<div class="panel">
			<p class="heading--huge">おたる 政寿司 銀座</p>
			<p class="-clr-fine">オタルマサズシ ギンザ</p>
			<p class="text--small -clr-fine">小樽70年以上続く老舗 寿司 完全個室 銀座 接待 会席 ﾌﾟﾗｲﾍﾞｰﾄ</p>
			<p class="text--small -clr-fine">北海道空輸直送 記念日 誕生日 お祝い御予約</p>
		</div>
		<div class="titlebar titlebar--tint-m">
			<div class="titlebar__body">
				<h3 class="heading--default">店舗情報</h3>
			</div>
		</div>
		<table class="table table--border-none table--th90">
			<tbody>
				<tr>
					<th>電話番号</th>
					<td>
						<a href="tel:050-3476-8678" class="ic-tel-tbl" onclick="sc_count_shop('phone_to_1')">
							<div>
								<p class="text--huge -clr-link">050-3476-8678</p>
							</div>
						</a>
					</td>
				</tr>
				<tr>
					<th>ネット予約</th>
					<td>
						<p>
							<a href="https://r.gnavi.co.jp/plan/ga2v900/plan-reserve/plan/plan_list/" onclick="sc_count('plan_reserve_04')" class="-clr-link -underline">ネット予約をする</a>
						</p>
					</td>
				</tr>
				<tr>
					<th>FAX</th>
					<td>
						<div>
							<p class="text--huge -clr-default">03-3562-7712</p>
						</div>
					</td>
				</tr>
				<tr>
					<th>住所</th>
					<td>
						<a href="https://r.gnavi.co.jp/ga2v900/map/" class="ic-map-tbl">
							<div>
								<p class="-clr-link">〒104-0061
									<br>東京都中央区銀座1-7-7 POLAビル10F 
								</p>
							</div>
						</a>
					</td>
				</tr>
				<tr>
					<th>アクセス</th>
					<td>ＪＲ 有楽町駅 徒歩5分 
						<br>地下鉄銀座線 銀座駅 徒歩5分 
						<br>地下鉄有楽町線 銀座一丁目駅 徒歩1分 
					</td>
				</tr>
				<tr>
					<th>営業時間</th>
					<td>月～金
						<br>ディナー　17:30～23:00
						<br>（L.O.21:30）
						<br>
						<br>月～土・祝日
						<br>ランチ　11:00～15:00
						<br>（L.O.14:30）
						<br>
						<br>土
						<br>ディナー　17:00～22:00
						<br>（L.O.21:00）
					</td>
				</tr>
				<tr>
					<th>定休日</th>
					<td>日曜日
						<br>月曜祝日の場合、日曜ランチ営業、月曜振替休日
					</td>
				</tr>
				<tr>
					<th>平均予算
						<br>(お一人様)
					</th>
					<td>10,000円（通常平均） 
						<br>15,000円（宴会平均） 
						<br>5,000円（ランチ平均） 
					</td>
				</tr>
				<tr>
					<th>クレジット
						<br>カード
					</th>
					<td>VISA MasterCard ダイナースクラブ アメリカン・エキスプレス JCB </td>
				</tr>
				<tr>
					<th>予約
						<br>キャンセル
						<br>規定
					</th>
					<td>直接お店にお問い合わせください。 </td>
				</tr>
				<tr>
					<th>シェフ・
						<br>料理人
					</th>
					<td>
						<p class="-mt4">
							<a href="https://r.gnavi.co.jp/ga2v900/chefpersonal/rwtzbu/" class="-clr-link -underline">プロフィールを見る</a>
						</p>
					</td>
				</tr>
				<tr>
					<th>備考</th>
					<td>※全室完全禁煙
						<br>※Cedynaカードもご利用頂けます。 
					</td>
				</tr>
			</tbody>
		</table>
		<div class="titlebar titlebar--tint-m">
			<div class="titlebar__body">
				<h3 class="heading--default">席・設備</h3>
			</div>
		</div>
		<table class="table table--border-none table--th90">
			<tbody>
				<tr>
					<th>総席数</th>
					<td>53席 
						<br>カウンター席あり 
					</td>
				</tr>
				<tr>
					<th>宴会最大人数</th>
					<td>26名様（着席時）
						<br>60名様（立食時） 
					</td>
				</tr>
				<tr>
					<th>貸切可能人数</th>
					<td>20名様 ～ 50名様 </td>
				</tr>
				<tr>
					<th>個室</th>
					<td>テーブル個室あり（2名～4名様用）
						<br>テーブル個室あり（2名～6名様用）
						<br>テーブル個室あり（2名～26名様用）
						<br>
						<div class="-mt4">
							<a href="https://r.gnavi.co.jp/ga2v900/equipment/" class="-clr-link -underline">個室・貸切情報を見る</a>
						</div>
					</td>
				</tr>
				<tr>
					<th>喫煙・禁煙</th>
					<td>店内全面禁煙 </td>
				</tr>
				<tr>
					<th>ペット同伴</th>
					<td>
						<p>同伴不可
							<br>
						</p>
					</td>
				</tr>
				<tr>
					<th>外国語対応</th>
					<td>外国語対応スタッフ： 英語を話せるスタッフがいる </td>
				</tr>
				<tr>
					<th>携帯・Wi-Fi・電源</th>
					<td>携帯の電波が入る（ ソフトバンク 、NTT ドコモ 、au ） </td>
				</tr>
				<tr>
					<th>その他の設備・サービス</th>
					<td>ワインセラーがある </td>
				</tr>
			</tbody>
		</table>
		<div class="titlebar titlebar--tint-m">
			<div class="titlebar__body">
				<h3 class="heading--default">メニューのサービス・関連情報</h3>
			</div>
		</div>
		<table class="table table--border-none table--th90">
			<tbody>
				<tr>
					<th>メニューのサービス</th>
					<td>誕生日特典あり ドリンクの持込可 </td>
				</tr>
				<tr>
					<th>ランチタイムのサービス</th>
					<td>デザート付きランチ 14時以降もランチメニューあり </td>
				</tr>
				<tr>
					<th>テイクアウト</th>
					<td>テイクアウト可 </td>
				</tr>
				<tr>
					<th>デリバリー・ケータリング</th>
					<td>ケータリング可 </td>
				</tr>
				<tr>
					<th>利用シーン</th>
					<td>昼の接待 夜の接待 デート 記念日 お一人様 同窓会 歓迎会 送別会 法事 </td>
				</tr>
				<tr>
					<th>お店のウリ</th>
					<td>寿司　鮨　接待　 顔合わせ　会食 産地直送　明朗会計 </td>
				</tr>
				<tr>
					<th>姉妹店の
						<br>ご案内
					</th>
					<td>
						<a href="https://r.gnavi.co.jp/ga2v900/sistershop/?sc_lid=r_sistershoplist" class="-clr-link -underline">姉妹店を見る</a>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="titlebar titlebar--tint-m">
			<div class="titlebar__body">
				<h3 class="heading--default">その他のサービス一覧</h3>
			</div>
		</div>
		<table class="table table--border-none table--th90">
			<tbody>
				<tr>
					<th>その他の
						<br>サービス
						<br>(外部サイト)
					</th>
					<td>
						<p class="-lineheight-large">
							<a href="http://wedding.gnavi.co.jp/rdt/kaoawase/ga2v900/" class="-inline -underline">結納・顔合わせ</a>
						</p>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="titlebar titlebar--tint-m">
			<div class="titlebar__body">
				<h3 class="heading--default">送る・シェアする</h3>
			</div>
		</div>
		<div class="panel">
			<ul class="social">
				<li class="social__item">
					<a href="http://line.naver.jp/R/msg/text/?%E3%81%90%E3%82%8B%E3%81%AA%E3%81%B3-%E3%81%8A%E3%81%9F%E3%82%8B%20%E6%94%BF%E5%AF%BF%E5%8F%B8%20%E9%8A%80%E5%BA%A7%0A050-3476-8678%0A%E6%9D%B1%E4%BA%AC%E9%83%BD%E4%B8%AD%E5%A4%AE%E5%8C%BA%E9%8A%80%E5%BA%A71-7-7%20POLA%E3%83%93%E3%83%AB10F%0Ahttps%3A%2F%2Fr.gnavi.co.jp%2Fga2v900%2F%3Fsc_lid%3Dscl_sbtn_ln" onclick="sc_count('sns_line_01')">
						<div class="ic-social-line-top"></div>
						<p>LINE</p>
					</a>
				</li>
				<li class="social__item">
					<a href="mailto:?subject=%5B%E3%81%90%E3%82%8B%E3%81%AA%E3%81%B3%5D%E3%81%8A%E3%81%9F%E3%82%8B%20%E6%94%BF%E5%AF%BF%E5%8F%B8%20%E9%8A%80%E5%BA%A7&amp;body=%E2%96%A0%E3%81%8A%E5%BA%97%E6%83%85%E5%A0%B1%0A%E3%81%8A%E3%81%9F%E3%82%8B%20%E6%94%BF%E5%AF%BF%E5%8F%B8%20%E9%8A%80%E5%BA%A7%0Ahttps%3A%2F%2Fr.gnavi.co.jp%2Fga2v900%2F%3Fsc_lid%3Dscl_sbtn_ml%0A%E6%9D%B1%E4%BA%AC%E9%83%BD%E4%B8%AD%E5%A4%AE%E5%8C%BA%E9%8A%80%E5%BA%A71-7-7%20POLA%E3%83%93%E3%83%AB10F%0A050-3476-8678%0A%0A%E3%81%90%E3%82%8B%E3%81%AA%E3%81%B3%0Ahttps%3A%2F%2Fwww.gnavi.co.jp%2F" onclick="sc_count('sns_mail_01')">
						<div class="ic-social-mail-top"></div>
						<p>メール</p>
					</a>
				</li>
				<li class="social__item">
					<a href="https://www.facebook.com/dialog/feed?app_id=183141018390835&amp;link=https%3A%2F%2Fr.gnavi.co.jp%2Fga2v900%2F%3Fsc_lid%3Dscl_sbtn_fb&amp;redirect_uri=https%3A%2F%2Fr.gnavi.co.jp%2Fga2v900%2F" onclick="sc_count('sns_fb_01')">
						<div class="ic-social-fb-top"></div>
						<p>Facebook</p>
					</a>
				</li>
				<li class="social__item">
					<a href="https://twitter.com/share?url=https%3A%2F%2Fr.gnavi.co.jp%2Fga2v900%2F%3Fsc_lid%3Dscl_sbtn_tw&amp;text=%E3%81%8A%E3%81%9F%E3%82%8B%20%E6%94%BF%E5%AF%BF%E5%8F%B8%20%E9%8A%80%E5%BA%A7&amp;hashtags=gnavi" onclick="sc_count('sns_tw_01')">
						<div class="ic-social-tw-top"></div>
						<p>Twitter</p>
					</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="-center -mb16">
		<p class="text--big">
			<a href="https://r.gnavi.co.jp/ga2v900/" class="-clr-link -underline" id="copyBtn" onclick="sc_count('infocopy')">お店の情報をコピーする</a>
		</p>
	</div>
	<ul class="listGroup listGroup--space-small listGroup--border_first">
		<li class="listGroup__item">
			<a href="https://my.gnavi.co.jp/s/login/?cType=RestmailSP&amp;rUrl=https%3A%2F%2Fr.gnavi.co.jp%2Frestmail%2Fform%2Fsmt%2Fregist%2F%3Fid%3Dga2v900%26fm%3Dgweb_shp%26rurl%3Dhttps%253A%252F%252Fr.gnavi.co.jp%252Fga2v900%252F" class="listGroup__layout ic-arr-r">
				<div class="listGroup__body">
					<p class="heading--big">お得な情報をGET！ 
						<span class="label label--inline -ml4">
							<span class="label__item label__item--free">
								<span>無料</span>
							</span>
						</span>
					</p>
					<p class="text--small">当店の最新情報やお得な限定特典を
						<br>メールで受け取ることができます。
					</p>
				</div>
			</a>
		</li>
	</ul>
	<div class="shopFooter">
		<div class="shopFooter__body">
			<div class="footerShopCV">
				<div class="footerShopCV__layout">
					<div class="hf-col hf-mb12">
						<div class="hf-col__8">
							<div class="hf-button">
								<div class="hf-button__body">
									<a href="https://r.gnavi.co.jp/plan/ga2v900/plan-reserve/plan/plan_list/" class="hf-button__item hf-button__item--big" onclick="sc_count('plan_reserve_05')">
										<div class="hf-ic-net-yoyaku">
											<div>
												<p class="hf-text--huge hf-clr-white">
													<span>ネット予約する</span>
												</p>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div class="hf-col__4 hf-pl8">
							<div class="hf-button">
								<div class="hf-button__body">
									<a href="https://r.gnavi.co.jp/ga2v900/" class="hf-button__item hf-button__item--default js-popover-button" onclick="sc_count('plan_list_02')">
										<div class="hf-ic-plan-cal">
											<div>
												<p class="hf-text--small hf-bold">
													<span>空席確認する</span>
												</p>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class="hf-col">
						<div class="hf-col__6">
							<div class="hf-button">
								<div class="hf-button__body">
									<a href="tel:050-3476-8678" class="hf-button__item hf-button__item--big" onclick="sc_count_shop('phone_to_2')">
										<div class="hf-ic-tel">
											<div>
												<p class="hf-text--huge hf-clr-white">
													<span>電話する</span>
												</p>
												<p class="hf-text--small hf-clr-white">
													<span>050-3476-8678</span>
												</p>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div class="hf-col__3 hf-pl8">
							<div class="hf-button">
								<div class="hf-button__body">
									<a href="http://my.gnavi.co.jp/restaurant/regist.php?shopid=ga2v900&amp;wMode=2" class="hf-button__item hf-button__item--default js-chottogButton js-chottogButton--unselected" data-chg-content="1401" onclick="sc_count('tnp_sp_bookmark')">
										<div class="hf-ic-chottog-top">
											<div>
												<p class="hf-text--small hf-bold">
													<span class="js-chottogText" style="color: rgb(102, 102, 102);">行きたい</span>
												</p>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div class="hf-col__3 hf-pl8">
							<div class="hf-button">
								<div class="hf-button__body">
									<a href="https://r.gnavi.co.jp/ga2v900/map/" class="hf-button__item hf-button__item--default" onclick="sc_count('map_to_1')">
										<div class="hf-ic-map-top">
											<div>
												<p class="hf-text--small hf-bold">
													<span>地図</span>
												</p>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 調整丸 -->
	<div class="chouseimaru">
		<a href="https://chosei.gnavi.co.jp/" class="chouseimaru__heading">
			<div class="ic-arr-r">
				<div class="chouseimaru__layout">
					<div>
						<p class="ic-logo-chouseimaru">調整丸</p>
					</div>
					<div class="chouseimaru__title">
						<p>幹事さんにオススメ</p>
						<p>お店・日程調整ツール</p>
					</div>
				</div>
			</div>
		</a>
		<div class="chouseimaru__body">
			<div class="chouseimaru__button">
				<a href="https://chosei.gnavi.co.jp/?page=ri&amp;eType=shop&amp;shop_id=ga2v900&amp;regCnt=sp_shop_add">
					<div>
						<p class="ic-add-chouseimaru">このお店を
							<br>候補店に追加する
						</p>
					</div>
				</a>
			</div>
			<div class="chouseimaru__button">
				<a href="https://chosei.gnavi.co.jp/?page=ri&amp;eType=date&amp;regCnt=sp_date">
					<div>
						<p class="ic-cal-chouseimaru">日程を調整する</p>
					</div>
				</a>
			</div>
		</div>
	</div>
	<!-- /調整丸 -->
	<div class="pageTop js-page-top">
		<a href="#page">
			<p>ページの先頭へ</p>
		</a>
	</div>
	<ul class="footerNav">
		<li class="footerNav__item">
			<a href="https://r.gnavi.co.jp/ga2v900/menulist/?sc_lid=smp_menu_02">
				<div>
					<span class="ic-nav-menu">メニュー</span>
				</div>
			</a>
		</li>
		<li class="footerNav__item">
			<a href="https://r.gnavi.co.jp/ga2v900/equipment/?sc_lid=smp_equip_02">
				<div>
					<span class="ic-nav-koshitsu">席・個室</span>
				</div>
			</a>
		</li>
		<li class="footerNav__item">
			<a href="https://r.gnavi.co.jp/ga2v900/photo/?sc_lid=smp_photo_02">
				<div>
					<span class="ic-nav-photo">写真</span>
				</div>
			</a>
		</li>
		<li class="footerNav__item">
			<a href="https://r.gnavi.co.jp/ga2v900/kodawari/?sc_lid=smp_kodawari_02">
				<div>
					<span class="ic-nav-kodawari">こだわり</span>
				</div>
			</a>
		</li>
		<li class="footerNav__item">
			<a href="https://r.gnavi.co.jp/ga2v900/review/?sc_lid=smp_review_02">
				<div>
					<span class="ic-nav-kuchikomi">口コミ</span>
				</div>
			</a>
		</li>
	</ul>
	<ul class="footerMemberBreadcrumb">
		<li class="footerMemberBreadcrumb__item">
			<a href="https://www.gnavi.co.jp/?sc_lid=r_breadcrumb">ぐるなび</a>
		</li>
		<li class="footerMemberBreadcrumb__item">
			<a href="http://r.gnavi.co.jp/area/aream2105/?sc_lid=r_breadcrumb">銀座</a>
		</li>
		<li class="footerMemberBreadcrumb__item">
			<a href="http://r.gnavi.co.jp/area/aream2105/sushi/rs/?sc_lid=r_breadcrumb">銀座×寿司（すし）</a>
		</li>
		<li class="footerMemberBreadcrumb__item">
			<a href="http://r.gnavi.co.jp/area/aream2105/sushiya/rs/?sc_lid=r_breadcrumb">銀座×寿司屋</a>
		</li>
		<li class="footerMemberBreadcrumb__item">
			<a href="https://r.gnavi.co.jp/ga2v900/?sc_lid=r_breadcrumb">おたる 政寿司銀座</a>
		</li>
	</ul>
	<ul class="listGroup listGroup--border_first listGroup--border_last-none">
		<li class="listGroup__item">
			<a href="https://itunes.apple.com/jp/app/gurunabi/id311691979?mt=8" class="listGroup__layout" onclick="sc_count('shop_app_bn_20140619')">
				<div class="listGroup__body">
					<div class="media">
						<div class="media__left">
							<div class="image image--round image--width-50">
								<p class="image__body">
									<img src="gurunavi_app.png" alt="ぐるなびアプリ" width="50" height="50">
								</p>
							</div>
						</div>
						<div class="media__body">
							<p class="heading--big">ぐるなび アプリ</p>
							<p class="text--small">事前予約から当日のお店探しまで！簡単サクサクお店探し</p>
						</div>
						<div class="media__right">
							<p class="label label--inline">
								<span class="label__item label__item--free">
									<span>無料</span>
								</span>
							</p>
						</div>
					</div>
				</div>
			</a>
		</li>
	</ul>
	<div style="border-top: 1px solid rgb(205, 193, 181); background-color: rgb(244, 234, 209); padding: 12px 16px;">
		<div style="display: -webkit-box;">
			<div style="-moz-box-flex: 1;">
				<p style="font-size: 11px; font-weight: bold; color: rgb(68, 68, 68);">このお店の周辺で開催中のイベント情報</p>
			</div>
			<div>
				<img src="lets_logo.png" alt="レッツエンジョイ東京" width="60">
			</div>
		</div>
		<div style="background-color: rgb(255, 255, 255); border-radius: 5px; padding: 8px; margin-top: 6px;">
			<div style="display: -webkit-box;">
				<div style="padding-right: 10px;">
					<img src="1486356thumb_s2.jpg" alt="ブルガリアフェア" width="50" height="50">
				</div>
				<div style="-moz-box-flex: 1;">
					<p style="font-size: 12px; font-weight: bold;">
						<a href="https://www.enjoytokyo.jp/shopping/event/1486356/" style="color: rgb(9, 89, 141); text-decoration: underline;">ブルガリアフェア</a>
					</p>
					<div style="margin-top: 6px;">
						<p style="font-size: 10px;">教文館</p>
						<p style="font-size: 10px;">2018/04/11（水）～2018/04/29（日）</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="lang-ft">
		<p>
			<a href="https://gurunavi.com/en/ga2v900/rst/">English</a>
			<span>|</span>
			<a href="https://gurunavi.com/zh-hans/ga2v900/rst/">&#31616;体中文</a>
			<span>|</span>
			<a href="https://gurunavi.com/zh-hant/ga2v900/rst/">繁體中文</a>
			<span>|</span>
			<a href="https://gurunavi.com/ko/ga2v900/rst/">&#54620;&#44397;&#50612;</a>
		</p>
	</div>
	<!-- /#contents -->
	<!-- common Footer -->
	<!-- 共通フッター -->
	<div id="gnFooter">
		<div id="gnFooterInner">
			<div id="gnFooterCopyRight">
				<p>
					<a href="https://mobile.gnavi.co.jp/iphone/">ぐるなび</a>
					<span>&#169; Gurunavi, Inc.</span>
				</p>
			</div>
		</div>
	</div>
	<!-- / -->
	<!-- /common Footer -->
</div>

</template>

<script>
export default {
  name: 'page2',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>