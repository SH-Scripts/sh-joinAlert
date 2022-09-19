RegisterNetEvent('sh-joinAlert:joined')
AddEventHandler('sh-joinAlert:joined', function(name)
    SendNUIMessage({type = 'playSound'})
    SendNUIMessage({type = 'open', text = cfg.locales.alert:format('<strong>'..name..'</strong>')})
    SetShake(cfg.eventDuration)
    Citizen.Wait(cfg.eventDuration)
    SendNUIMessage({type = "close"})
end)

function SetShake(count)
    local shake = 0
    while shake < count do
        ShakeGameplayCam('SMALL_EXPLOSION_SHAKE', 0.1)
        shake = shake + 100
        Citizen.Wait(100)
    end
end